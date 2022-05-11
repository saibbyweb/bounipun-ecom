<template>
<!-- delivery address field -->
<div v-if="addressIsIndian || (!addressIsIndian && label !=='State')" class="delivery-input">
    <p v-if="error.status" class="error-msg">{{ error.msg }}</p>
    <div class="input-box">
        <div v-if="isMobileNumber" class="country-code">{{ countryCode }}</div>
        <input v-if="type !== 'select'" class="field" type="text" :value="value" @input="$emit('input', $event.target.value)" autocomplete="new-password" :maxlength="maxLength" :class="{ error: error.status, isMobileNumber }" :disabled="disabled" />

        <!-- address type selection -->
        <select class="selection field" v-if="label === 'Address Type'" @change="$emit('input', $event.target.value)" :value="value">
            <option value="Home"> Home </option>
            <option value="Office"> Office </option>
            <option value="Other"> Other </option>
        </select>

        <!-- indian state list -->
        <select class="field" v-if="label === 'State' && countryCode === '+91'" @change="$emit('input', $event.target.value)" :value="value">
          <option class="option" v-for="(state, index) in indianStateList" :key="index" :value="state">
            {{ state }}
          </option>
        </select>


    </div>
    <label class="label" :class="{ error: error.status }"> {{ label }} </label>
</div>
</template>

<script>
export default {
    props: {
        label: String,
        value: String,
        type: {
            type: String,
            default: 'text'
        },
        isMobileNumber: {
            type: Boolean,
            default: false
        },
        countryCode: String,
        maxLength: {
            type: Number,
            default: 100
        },
        disabled: {
            type: Boolean,
            default: false
        },
        error: {
            type: Object,
            default: {
                status: Boolean,
                msg: String
            }
        }
    },
    computed: {
        addressIsIndian() {
            return this.countryCode === '+91'
        }
    },
    data() {
        return {
            indianStateList : ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]
        };
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.delivery-input {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    margin: 10px 0;

    @media (max-width: 768px) {
        margin: 2% 0;
    }

    .label {
        font-size: 12px;
        padding-left: 2%;
        transform: translateY(0%);
        color: #183437;
        transition: all 0.2s ease;
        text-transform: uppercase;
        margin-bottom: 3px;
        letter-spacing: 0.2px;

        &.error {
            color: #bf3d3d;
        }
    }

    .error-msg {
        text-align: center;
        font-size: 11px;
        width: 100%;
        margin-top: 10px;
        color: #a93737;
        background-color: white;
    }

    .input-box {
        position: relative;

        .country-code {
            position: absolute;
            width: 15%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: $font_2;
            border: 1px solid $gray;
            background-color: $dark_gray;
            color: white;
            font-size: 13px;
        }

        .field {
            border: none;
            border-radius: 0;
            // border-bottom: 1px solid $gray;
            width: 100%;
            padding: 2%;
            background-color: #e7e7e7;
            border-bottom: 2px solid #e7e7e7;
            transition: all 0.2s ease-in-out;
            font-family: $font_2;
            -webkit-appearance:none;
            color:black;

            .option {
                color: black;
            }

            &:focus {
                border-bottom: 2px solid $dark_gray;
            }

            &.error {
                border-bottom: 2px solid #bf3d3d;
            }

            &.isMobileNumber {
                text-indent: 16%;
            }
        }

        .field:focus~.label {
            color: #593e10;
            font-weight: 900;
            transform: translateY(-23%);
        }
    }
}
</style>
