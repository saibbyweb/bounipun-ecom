<template>
<div class="cart page -wh">
    <!-- delivery address header -->
    <div class="page-header center">
        <h2 class="title"> Delivery Address </h2>
    </div>

    <div class="delivery-address">
        <DeliveryInput label="Full Name" />
        <DeliveryInput label="Mobile Number" />
        <DeliveryInput label="House no, Flat, Building, Apartment" />
        <DeliveryInput label="Email" />
        <DeliveryInput label="Lane no, Area Colony, Street, Sector" />
        <DeliveryInput label="Town/City" />
        <DeliveryInput label="Pincode" />
    </div>
    
    <!-- proceed to checkout -->
    <div class="pad-10">
        <button class="action"> Continue to Checkout </button>
    </div>
</div>
</template>

<style lang="scss" scoped>
.delivery-address {
    margin: 4%;
    padding: 4%;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
