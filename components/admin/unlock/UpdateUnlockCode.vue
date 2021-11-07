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
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- log -->
    <div class="log">
      <label class="label"> Usage Log </label>
      <button
        style="
          font-size: 11px;
          padding: 2px 5px;
          background-color: #333333;
          color: white;
        "
        v-if="doc.log.length > 0"
        @click="populateUsageLog()"
      >
        Fetch Names
      </button>

      <div class="flex center col">
        <div
          class="item flex around"
          v-for="(item, index) in doc.log"
          :key="index"
        >
          <span>
            Used on: <br />
            {{ $formatDate(item.usedOn) }}</span
          >

          <span>
            Customer ID: <br />
            {{ item.user }}</span
          >

          <span v-if="customersUnlocked.length > 0">
            Name: <br />
            {{ customersUnlocked[index].firstName }}
            {{ customersUnlocked[index].surName }}
          </span>
        </div>
      </div>
    </div>

    <!-- black list -->
    <div class="black-list">
      <label class="label"> Black List: </label>
      <autocomplete
        inputClass="small"
        ref="autocomplete"
        :source="nonBlacklisted"
        @enter="addToBlackList"
        @selected="addToBlackList"
      >
      </autocomplete>

      <div class="list">
        <div class="selected" v-for="(blacklisted,index) in doc.blackList" :key="index">
            <span> {{ blacklisted.name }} </span>
            <img @click="removeFromBlacklist(index)" src="/icons/light/trash.png" />
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
  log: [],
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
    };
  },
  computed: {
    nonBlacklisted() {
      return this.unlockedCustomersWithIds.filter(entry => {
        return this.doc.blackList.findIndex(blacklisted => blacklisted.customer === entry.customer) === -1
      })
    },
    unlockedCustomersWithIds() {
      if (this.customersUnlocked.length === 0)
        return [{ name: "No List available" }];

      let list = this.doc.log.map((item, index) => {
        const { firstName, surName } = this.customersUnlocked[index];
        return {
          name: firstName + " " + surName,
          customer: item._id,
        };
      });

      return list;
 
    },
  },
  methods: {
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
    populateForm(details) {
      const {
        _id,
        code,
        type,
        validity,
        validityRange,
        log,
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
        log,
        blackList,
        description,
        status,
      };
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
      const result = await this.$axios.$post("/populate", {
        model: "users",
        fields: "firstName surName",
        _ids: this.doc.log.map((item) => item.user),
      });

      if (result.length > 0) {
        this.customersUnlocked = result;
      }
    },
    addToBlackList(data) {
      /* save customer id in black list */
      this.doc.blackList.push(data.selectedObject);
    },
    removeFromBlacklist(index) {
      this.doc.blackList.splice(index, 1);
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
      font-size: 11px;
      background-color: $dark_gray;
      color: white;
      padding: 2px;
      margin: 5px;
    }
  }
}
</style>
