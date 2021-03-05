<template>
<div class="gift-cards page">

    <div class="page-header center-col">
        <h2 class="title"> Gift Cards </h2>
    </div>

    <!-- redeem gift card -->
    <div class="redeem-card center-col">
        <h3 class="heading"> Received a gift card ? </h3>
        <!-- fields -->
        <div class="fields center-col">
            <input class="field" type="text" placeholder="Enter Gift Card No." />
            <input class="field" type="text" placeholder="Enter Pin" />
        </div>
        <!-- redeem button -->
        <button class="action"> Redeem Card </button>
    </div>

    <!-- create new card action-->
    <div class="create-card-action center-col">
        <p class="desc"> Give your loved ones the gift of choice with
            Bounipun Gift Cards. </p>
        <button class="action"> Create Gift Card > </button>
    </div>

    <!-- create card -->
    <div class="create-card center-col">
        <h3 class="heading"> Create Gift Card </h3>
        <!-- fields -->
        <div class="fields center-col">
            <input class="field" type="text" placeholder="Enter Amount" />
            <input class="field" type="text" placeholder="Recipient Name" />
            <input class="field" type="text" placeholder="Mobile Number" />
            <input class="field" type="text" placeholder="Recipient Email" />
        </div>
        <!-- redeem button -->
        <button class="action"> Proceed to Purchase </button>

        <span class="disclaimer"> The Gift Card cannot be cancelled, refunded or returned. </span>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.gift-cards {

    /* redeem card */
    .redeem-card {
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
        background-color: white;
        padding: 20px;

        .heading {
            text-transform: uppercase;
        }

    }

    /* fields */
    .fields {
        width: 100%;
        margin-bottom: 10px;

        .field {
            width: 80%;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #c8c8c8;
        }
    }

    /* create card action */
    .create-card-action {
        margin-top: 30px;

        .desc {
            font-family: $font_2;
            text-align: center;
            font-size: 14px;
            margin-bottom: 10px;
        }
    }

    /* create card */
    .create-card {
        margin-top: 10px;
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
        background-color: white;
        padding: 20px;

        .disclaimer {
            margin-top:10px;
            font-size:10px;
            text-align: center;
        }
    }
}
</style>
