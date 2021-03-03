<template>
<div class="address-book page">

    <!-- add new address card -->
    <div class="address-card">
        <div class="add-new center-col">
            <span class="icon"> + </span>
            <span class="label"> Add New Address </span>
        </div>
    </div>

    <!-- address card -->
    <div class="address-card details" v-for="(address, index) in addressList" :key="index">
        <span class="name"> {{ address.name }} </span>
        <span> {{ address.phoneNumber }} </span>
        <span> {{ address.addressLine1 }} </span>
        <span> {{ address.addressLine2 }} </span>
        <span> {{ address.email }} </span>
        <span> {{ address.city }} </span>
        <span> {{ address.pincode }} </span>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            addressList: [{
                name: "Suhaib Khan",
                phoneNumber: "+91-9906697711",
                addressLine1: "H.no 54, Qayoom Colony, Rawalpora",
                addressLine2: "Srinagar, Jammu & Kashmir, 190001",
                email: "hello@saibbyweb.com",
                city: "Srinagar",
                pincode: "190001"
            },
            {
                name: "Nouman Nasir",
                phoneNumber: "+91-8494007711",
                addressLine1: "H.no.24, Lane no.2, Sector A, Rawalpora",
                addressLine2: "Srinagar, Jammu & Kashmir, 190005",
                email: "nouman@saibbyweb.com",
                city: "Srinagar",
                pincode: "190001"
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.address-book {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .address-card {
        border-radius: 5px;
        width: 47%;
        height: 50vw;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
        margin: 1.5%;

        /* add new card */
        .add-new {
            height: 100%;
            width:100%;

            .icon {
                font-size: 13vw;
                color: $gray;
            }

            .label {
                font-size: 10px;
                
            }
        }

        /* details */
        &.details {
            display: flex;
            flex-direction: column;
            padding: 4% 3%;
            span {
                font-size: 10px;
                &.name {
                    font-family: $font_1_bold;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
