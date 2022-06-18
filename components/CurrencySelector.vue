<template>
    <div class="currency-selector flex center" v-if="storeCurrency !== 'INR'">
        <select :value="storeCurrency" @change="updateStoreCurrency" class="select">
            <option v-for="currency in currecnyList" :key="currency" :value="currency"> {{ currency }} </option>
        </select>
        <!-- <span style="color:white; margin-left:10px;">  {{ $store.state.customerV2.currency }} </span> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            storeCurrencyx: this.$store.state.customerV2.currency
        }
    },
    computed: {
        storeCurrency() { 
            return this.$store.state.customerV2.currency
        },
        currecnyList() {
            const { currency, activeCurrencies } = this.$store.state.customerV2;
            // if(currency === "INR") {
            //     return ["INR"]
            // }
            /* currency is not INR, get all currecies except INR */
            return activeCurrencies;
            return activeCurrencies.filter(c => c !== "INR")
        }
    },
    methods: {
        updateStoreCurrency({target}) {
            this.$store.commit('customerV2/setStoreCurrency', target.value);
            this.$store.commit('customer/setPreferredCurrency', target.value);
            this.$store.dispatch('customer/fetchGlobalConfig');
        }
    }
}
</script>

<style lang="scss" scoped>
.currency-selector {
    margin-left:14px;
    .select {
        padding:1px 3px;
        // padding: 0;
        font-size:16px;
        font-family: $font_2;
        color:white;
        background: transparent;
        // border:none;
        border: 1px solid #efefef56;

        @media(max-width: 768px) {
            font-size:12px;
            // padding:5px 1px;
            padding: 0;
            
        }
    }
}
</style>