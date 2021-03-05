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
            <input class="field" type="pin" placeholder="Enter Pin" />
        </div>
        <!-- redeem button -->
        <button class="action"> Redeem Card </button>
    </div>

    <!-- create new card -->
    <div class="create-card center-col">
        <p class="desc"> Give your loved ones the gift of choice with
            Bounipun Gift Cards. </p>
        <button class="action"> Create Gift Card > </button>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.gift-cards {
    .redeem-card {
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
        background-color: white;
        padding: 20px;

        .heading {
            text-transform: uppercase;
        }

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

    }
    .create-card {
        margin-top:30px;
        .desc {
            font-family: $font_2;
            text-align: center;
            font-size:14px;
            margin-bottom: 10px;
        }
    }
}
</style>
