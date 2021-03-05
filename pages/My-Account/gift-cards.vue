<template>
<div class="gift-cards page">

    <div class="page-header center-col">
        <h2 class="title"> Gift Cards </h2>
    </div>

    <!-- indicator -->
    <div class="center indicator">
        <span class="activity">
            {{ redeemState ? 'Redeem' : 'Create'}} Gift Card
        </span>
    </div>

    <!-- redeem gift card -->
    <div v-if="redeemState" class="redeem-card center-col">
        <!-- fields -->
        <div class="fields center-col">
            <input class="field" type="text" placeholder="Enter Gift Card No." />
            <input class="field" type="text" placeholder="Enter Pin" />
        </div>
        <!-- redeem button -->
        <button class="action"> Redeem Card </button>

        <p class="desc"> Give your loved ones the gift of choice with
            Bounipun Gift Cards. </p>
        <span class="anchor" @click="redeemState = false"> Create a Bounipun card </span>
    </div>

    <!-- create card -->
    <div v-if="!redeemState" class="create-card center-col">
        <!-- fields -->
        <div class="fields center-col">
            <input class="field" type="text" placeholder="Enter Amount" />
            <input class="field" type="text" placeholder="Recipient Name" />
            <input class="field" type="text" placeholder="Mobile Number" />
            <input class="field" type="text" placeholder="Recipient Email" />
        </div>
        <!-- redeem button -->
        <button class="action"> Proceed to Purchase </button>

        <span class="disclaimer"> *The Gift Card cannot be cancelled, refunded or returned. </span>

        <p class="desc"> Already have a bounipun card? </p>
        <span class="anchor" @click="redeemState = true"> Redeem a Bounipun card </span>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            redeemState: true
        }
    }
}
</script>

<style lang="scss" scoped>
.gift-cards {

    /* indicator */
    .indicator {
        width: 100%;
        background-color: $primary_dark;
        padding: 3%;
        margin-top: 10px;
        position: relative;

        .back-icon {
            position: absolute;
            top: 0;
            left: 2%;
            height: 100%;
            width: 10%;

            img {
                height: 40%;
            }
        }

        .activity {
            color: white;
            font-size: 13px;
        }
    }

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
            width: 90%;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #c8c8c8;
        }
    }

    /* desc */
    .desc {
        margin-top: 20px;
        font-size: 12px;
        text-align: center;
    }

    /* anchor */
    .anchor {
        font-family: $font_1_bold;
        text-transform: uppercase;
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
            margin-top: 10px;
            font-size: 8px;
            text-align: center;
        }
    }
}
</style>
