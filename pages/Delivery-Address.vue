<template>
<div class="cart page -wh">
    <div class="delivery-address">
        <!-- country region -->
        <h2 class="title"> Country/Region </h2>
        <!-- country selection -->


        <CountrySelect v-model="selectedCountryCodex"/>

        <h2 class="title"> Shipping Address </h2>
        <!-- delivery input fields -->
        <DeliveryInput v-for="(field, key, index) in formData" :key="index" v-model="field.value" :error="field.error" :label="field.label" @input="field.error = false" :isMobileNumber="key === 'mobileNumber'" :countryCode="selectedCountryCodex" />
    </div>

    <!-- proceed to checkout -->
    <div class="pad-10">
        <button @click="proceedToCheckout" class="action"> Continue to Checkout </button>
    </div>
</div>
</template>

<script>
import countryData from "@/helpers/countryCodes.js";

export default {
    data() {
        return {
            formData: this.createFormData(),
            countryCodes: countryData,
            selectedCountryIndex: 98,
            countrySearchTerm: "",
            showCountrySelect: false,
            selectedCountryCodex: ""
        }
    },
    computed: {
        selectedCountry() {
            if (this.matchedCountries.length === 0)
                return ""
            return this.matchedCountries[this.selectedCountryIndex];
        },
        selectedCountryCode() {
            if (this.matchedCountries.length === 0)
                return "";
            return this.matchedCountries[this.selectedCountryIndex].dialCode
        },
        matchedCountries() {
            if (this.countrySearchTerm === "")
                return this.countryCodes;

            this.selectedCountryIndex = 0;

            return this.countryCodes.filter(country => {
                return country.name.toUpperCase().startsWith(this.countrySearchTerm.toUpperCase());
            })
        }
    },
    async mounted() {
        // this.countryCodes = await this.$axios.$get('https://gist.githubusercontent.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4/raw/95677f414c98b0289b75436c1e10d9c1755c62f0/countries.json');

        // this.countryCodes = countryData;
    },
    methods: {
        selectCountry(index) {
            this.selectedCountryIndex = index;
            this.showCountrySelect = false;
            // this.formData.countryCode.value = this.matchedCountries[this.selectedCountryIndex].dialCode;
        },
        createFormData() {
            /* form fields */
            const fields = {
                'firstName': 'First Name',
                'surName': 'Sur Name',
                // 'countryCode': 'Country Code',
                'mobileNumber': 'Mobile Number',
                'email': 'Email',
                'addressLine1': 'Address Line #1',
                'addressLine2': 'Address Line #2',
                'city': 'City',
                'postalCode': 'Pincode'
            };

            /* delivery address object */
            let deliveryAddress = {};

            /* create delivery form object */
            for (let key in fields) {
                deliveryAddress[key] = {
                    label: fields[key],
                    value: "",
                    error: {
                        status: false,
                        msg: ""
                    }
                }
            }
            return deliveryAddress
        },
        proceedToCheckout() {
            /* collect delivery address */
            let deliveryAddress = {};
            Object.keys(this.formData).forEach(key => {
                deliveryAddress[key] = this.formData[key].value;
            });
            this.$router.push({name: 'Checkout', params: { deliveryAddress }})
        }
    }
}
</script>

<style lang="scss" scoped>
.delivery-address {
    // margin: 4%;
    padding: 10% 0;
    // box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        font-size: 22px;
        font-family: $font_1;
        color: $dark_gray;
        text-transform: uppercase;
        align-self: flex-start;
        margin: 7% 5%;
        margin-right: 0;
    }

    .country-select {
        border: none;
        border-radius: 0;
        width: 90%;
        // padding: 2%;
        background-color: white;
        border-bottom: 2px solid #e7e7e7;
        transition: all 0.2s ease-in-out;
        position: relative;

        .selected-country {
            background-color: #e7e7e7;
            // background-color: $dark_gray;
            // border-bottom: 2px solid $dark_gray;
            border-bottom: 2px solid #e7e7e7;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 2%;
            width: 100%;

            span {
                font-size:14px;
                font-family: $font_2;
                // color:white;
            }

            &.focused {
                border-bottom: 2px solid $dark_gray;
            }

            img {
                width: 10%;
                margin-right: 10px;
            }
        }

        .country-list {
            position: absolute;
            top: 100%;
            left: 0;
            min-height: 100px;
            max-height: 300px;
            overflow-y: scroll;
            background-color: #e7e7e7e2;
            z-index: 1;
            border: 2px solid $dark_gray;
            border-top: none;
            width: 100%;

            /* search */
            .search {

                .field {
                    width: 100%;
                    border: none;
                    padding: 10px;
                    border-bottom: 1px solid #e7e7e7;
                    font-size: 14px;
                }
            }

            .item {
                border-bottom: 2px solid #e7e7e7;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 2%;
                // background-color: #e7e7e7;

                img {
                    width: 7%;
                    margin-right: 10px;
                }

                span {
                    font-family: $font_2;
                }

            }

            .no-results {
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    margin-top:10px;
                    font-size: 14px;
                }
            }

        }
    }
}
</style>
