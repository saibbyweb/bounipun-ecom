<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Unlock Code</h2>
    <!-- unlock ID -->
    <InputBox
      v-if="editMode"
      label="Unlock ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- unlock code -->
    <InputBox label="Unlock Code" v-model="doc.code" />

    <!-- unlock type -->
    <SelectBox
      :options="unlockTypes"
      v-model="doc.type"
      label="Select Unlock Type"
    />

    <!-- unlock validity -->
    <InputBox
      label="Validity (Total number of allowed uses)"
      v-model="doc.validity"
      type="number"
    />

    <!-- validity range -->
    <label class="label"> Validity Range </label>
    <client-only>
      <v-datepicker
        color="blue"
        is-range
        v-model="doc.validityRange"
        :from-date="doc.validityRange.start"
      />
    </client-only>

    <!-- invitation template -->
    <div class="section">
      <label class="label"> Invitation: </label>
      <InputBox v-model="doc.invitation.clientName" label="Client Name" :internal="true" />

      <SelectBox :internal="true" label="Select Link" :options="allSlugs" v-model="doc.invitation.link" />
      
      <!-- invitation template -->
      <TextBox
        v-model="doc.description"
        label="Invitation Template:"
        :nonAdmin="true"
        :internal="true"
      />
      <div class="flex center">
      <span style="font-size:12px; color: gray; text-align:center; width:100%;"> Variable that can be used within ##: [client, link, start, end ]</span>
      </div>
      <br/>

      <label class="label"> Client Template: </label><br />
      <span style="font-size: 13px"> {{ clientTemplate }} </span>
      <button @click="copyToClipBoard(clientTemplate)" class="copy">COPY</button>
    </div>

    <!-- current log -->
    <div class="log current">
      <label class="label"> Current Log: </label>
      <div class="flex center col">
        <div
          class="item flex around"
          v-for="(item, index) in doc.log"
          :key="index"
        >
          <!-- <span style="width:5%;">
            <b> S.no: </b>
            {{ index + 1 }}</span
          > -->

          <span class="flag" v-if="customersUnlocked.length > 0">
            <b> Country: </b> <br />
            {{
              unlockedCustomersWithIds[item.user].countryIsoCode +
              " " +
              getCountry(unlockedCustomersWithIds[item.user].countryIsoCode)
            }}
          </span>
          <span v-if="customersUnlocked.length > 0">
            <b> Name: </b> <br />
            {{ unlockedCustomersWithIds[item.user].name }}
          </span>

          <span class="timestamp">
            <b> Used on: </b> <br />
            {{ $formatDate(item.usedOn) }}</span
          >

          <!-- <span>
            Customer ID: <br />
            {{ item.user }}</span
          > -->
        </div>
      </div>
    </div>
    <br />

    <!-- timeline -->
    <div class="log timeline">
      <label class="label"> Complete Timeline: </label>
      <div
        class="item flex around"
        v-for="(item, index) in doc.timeline"
        :key="index"
      >
        <span class="flag" v-if="customersUnlocked.length > 0">
          <b> Country: </b> <br />
          {{
            unlockedCustomersWithIds[item.user].countryIsoCode +
            " " +
            getCountry(unlockedCustomersWithIds[item.user].countryIsoCode)
          }}
        </span>

        <span v-if="customersUnlocked.length > 0">
          <b>Name: </b> <br />
          {{ unlockedCustomersWithIds[item.user].name }}
        </span>

        <span>
          <b>Action:</b> <br />
          {{ item.action }}</span
        >

        <span class="timestamp">
          <b> Used on:</b> <br />
          {{ $formatDate(item.taken) }}</span
        >
      </div>
    </div>

    <!-- black list -->
    <div class="black-list">
      <div v-if="customersUnlocked.length > 0">
        <label class="label"> Black List: </label>
        <autocomplete
          inputClass="small"
          ref="autocomplete"
          :source="nonBlacklisted"
          @enter="addToBlackList"
          @selected="addToBlackList"
        >
        </autocomplete>
      </div>

      <div class="list">
        <div
          class="selected"
          v-for="(blacklisted, index) in doc.blackList"
          :key="index"
        >
          <span> {{ blacklisted.name }} </span>
          <img
            @click="removeFromBlacklist(index)"
            src="/icons/light/trash.png"
          />
        </div>
      </div>

      <!-- publish toggle -->
      <Toggle v-model="doc.status" label="Status" />
      <!-- update button -->
      <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading">
          {{ editMode ? "Apply Changes" : "Add Unlock Code" }}
        </button>
        <!-- delete document -->
        <button
          v-if="editMode"
          @click="deleteDocument"
          class="action delete"
          :disabled="loading"
        >
          Delete
        </button>
      </div>
      <!-- error message -->
      <Toast :msg="error.msg" :show="error.status" :error="true" />
    </div>
  </div>
</template>

<script>
import { getCountry } from "../../../helpers/countryCodes";
/* base doc */
const baseDoc = () => ({
  _id: "",
  code: "",
  type: "type1",
  validity: "",
  validityRange: {
    start: new Date(),
    end: new Date(),
  },
  invitation :{
    clientName: "",
    link: ""
  },
  log: [],
  timeline: [],
  blackList: [],
  description: "",
  status: false,
});

export default {
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      unlockTypes: [
        {
          name: "Select Type",
          value: null,
        },
        {
          name: "Type 1",
          value: "type1",
        },
        {
          name: "Type 2",
          value: "type2",
        },
      ],
      error: {
        status: false,
        msg: "Document could not be saved",
      },
      loading: false,
      updated: false,
      customersUnlocked: [],
      clientName: "",
      link: "",
      allSlugs: []
    }
  },
  computed: {
    clientTemplate() {
      let temp = this.doc.description.replace("##client##", this.doc.invitation.clientName);
      temp = temp.replace("##code##", this.doc.code);
      temp = temp.replace("##link##", `${this.doc.invitation?.link || this.link}&code=${this.doc.code}`);
      temp = temp.replace('##start##', this.$formatDate(this.doc.validityRange.start, true))
      temp = temp.replace('##end##', this.$formatDate(this.doc.validityRange.end, true));
      return temp;
    },
    nonBlacklisted() {
      const list = this.customersUnlocked.map((entry) => {
        const notBlacklisted =
          this.doc.blackList.findIndex(
            (blacklisted) => blacklisted.customer == entry._id
          ) === -1;

        if (notBlacklisted) {
          const item = {
            name: this.unlockedCustomersWithIds[entry._id].name,
            customer: entry._id,
          };

          return item;
        }
        return false;
      });

      return list.filter((customer) => customer !== false);
    },
    unlockedCustomersWithIds() {
      if (this.customersUnlocked.length === 0) return {};

      let list = {};
      for (const customer of this.customersUnlocked) {
        const { _id, firstName, surName, countryIsoCode } = customer;
        list[_id] = {
          name: firstName + " " + surName,
          countryIsoCode,
          customer: _id,
        };
      }

      return list;
    },
  },
  mounted() {
    this.getListofLockablePages();
  },
  methods: {
    async getListofLockablePages() {
      const {docs: allCollections} = await this.$fetchData("collections",{}, true);
      const {docs: allProductLists} = await this.$fetchData("product_lists", {}, true);

      const collectionSlugs = allCollections.map(col => '/collections?slug=' + col.slug);
      const productListSlugs = allProductLists.map(list => '/lists/' + list.slug + '?c=1');
      
      // const allSlugs = [...collectionSlugs, ...productListSlugs].map(slug => ({name: location.host + slug, value:location.host + slug }));
      const BASE_URL = 'https://bounipun.in';
      const allSlugs = [...collectionSlugs, ...productListSlugs].map(slug => ({name: BASE_URL + slug, value: BASE_URL + slug }));
      this.allSlugs = allSlugs;
      /* set first slug as the default link  */
      this.link = this.allSlugs[0].value;
    },
    copyToClipBoard(textToCopy) {
      const tmpTextField = document.createElement("textarea");
      tmpTextField.textContent = textToCopy;
      tmpTextField.setAttribute("style", "position:absolute; right:200%;");
      document.body.appendChild(tmpTextField);
      tmpTextField.select();
      tmpTextField.setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
      tmpTextField.remove();
    },
    async updateDocument() {
      this.doc.code = this.doc.code.toUpperCase();

      /* update black list (should be string of user _ids) */
      // this.doc.blackList = this.doc.blackList.map(blackListed => blackListed.name);

      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        this.doc,
        this.editMode
      );
      this.loading = false;

      console.log(result, "-- FROM UPDATE UNLOCK ");

      if (!result.updated) {
        this.error.msg = result.message;
        this.error.status = true;
        setTimeout(() => {
          this.error.status = false;
        }, 2000);
        return;
      }

      this.$emit("updated");
      this.populateForm(result.doc);
      this.$flash(this);
    },
    async deleteDocument() {
      this.loading = true;
      const result = await this.$deleteDocument(this.model, this.doc._id);
      this.loading = false;

      if (!result.deleted) return;

      this.$emit("updated");
      this.resetForm();
      this.$flash(this);
    },
    async populateForm(details) {
      const {
        _id,
        code,
        type,
        validity,
        validityRange,
        invitation,
        log,
        timeline,
        blackList,
        description,
        status,
      } = details;
      this.doc = {
        _id,
        code,
        type,
        validity: validity.toString(),
        validityRange,
        invitation: invitation === undefined ? { clientName: "", link: "" } : invitation,
        log,
        timeline: timeline === undefined ? [] : timeline,
        blackList,
        description,
        status,
      };
      await this.populateUsageLog();
      this.editMode = true;
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.populateForm(baseDoc());
      this.customersUnlocked = [];
      this.editMode = false;
    },
    async populateUsageLog() {
      /* collection user ids */
      let allIds = [];
      const currentLogIds = this.doc.log.map((item) => item.user);
      const timelineIds = this.doc.timeline.map((item) => item.user);
      allIds = [...currentLogIds, ...timelineIds];
      /* remove duplicates */
      allIds = [...new Set(allIds)];

      console.log(allIds.length);

      const result = await this.$axios.$post("/populate", {
        model: "users",
        fields: "firstName surName countryIsoCode",
        _ids: allIds,
      });
      
 

      if (result.length > 0) {
        this.customersUnlocked = result;
      }
    },
    addToBlackList(data) {
      if (data.selectedObject.customer === false) {
        this.populateUsageLog();
        return;
      }
      /* save customer id in black list */
      this.doc.blackList.push(data.selectedObject);
    },
    removeFromBlacklist(index) {
      this.doc.blackList.splice(index, 1);
    },
    getCountry(isoCode) {
      const country = getCountry(isoCode);
      if (country === false) {
        return " ";
      }
      return country.unicodeFlag;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  .selected {
    background: #d68595;
    color: white;
    border-radius: 20px;
    padding: 7px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    span {
      font-size: 12px;
      color: white;
    }

    img {
      margin-left: 1vw;
      width: 2vw;
      cursor: pointer;
    }
  }
}

.section {
  position: relative;
  margin: 10px;
  padding: 5px 5px 30px 5px;
  border-radius: 5px;
  overflow: hidden;

  .copy {
    transition: all 0.1s ease-in-out;
    background-color: rgb(77, 181, 230);
    color: white;
    &:hover {
        background-color: rgb(218, 206, 45);
    }
    &:active {
      background-color: rgb(32, 211, 113);
    }
  }
}

.label {
  font-family: $font_2_bold;
  color: $gray;
  text-transform: uppercase;
  font-size: 10px;
  padding: 2%;
  margin-left: 5px;
  font-weight: 900;
}

.log {
  .item {
    border: 1px dashed #efefef;
    width: 100%;
    span {
      font-size: 12px;
      color: rgb(51, 51, 51);
      padding: 2px;
      margin: 5px;

      b {
        font-size: 11px;
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.172);
        background-color: rgb(134, 172, 243);
        color: white;
        border-radius: 2px;
        padding: 1px 6px;
      }

      &.flag {
        font-size: 13px;
        width: 10%;
      }

      &.timestamp {
        width: 25%;
      }
    }
  }
}
.section {
  margin-top: 10px;
  padding-top: 10px;
  border: 3px dotted #efefef;

  .label {
    color: #333333;
    font-size: 12px;
    padding-top: 10px;
  }
}
</style>
