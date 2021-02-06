<template>
<div class="footer">
    <!-- help section -->
    <div class="help section">
        <h3> Help </h3>
        <Button class="item" v-for="item in helpSection" :key="item"> {{ item }} </Button>
    </div>

    <!-- find us on section -->
    <div class="find-us-on section">
        <h3> Find Us On </h3>
        <Button class="item" v-for="item in findUsOnSection" :key="item"> {{ item }} </Button>
    </div>

    <!-- company section -->
    <div class="company section">
        <h3> Comapny </h3>
        <Button class="item" v-for="item in companySection" :key="item"> {{ item }} </Button>
    </div>

    <!-- card symbols section -->
    <div class="card-symbols section">
        <img src="/icons/visa.png" />
        <img src="/icons/maestro.png" />
        <img src="/icons/master_card.png" />
        <img src="/icons/american_express.png" />
    </div>

    <!-- copyright -->
    <div class="copyright section">
        <span class="last-footer-item">  © 2005 - 2020 Bounipun </span>
    </div>

    <!-- crafted in kashmir -->
    <div class="crafter-in-kashmir section" style="grid-column: 3; align-items: flex-end;">
        <span class="last-footer-item"> Crafted with ❤ in Kashmir </span>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            helpSection: [
                'Contact Us',
                'Shipping',
                'Payment Options',
                'Return & Exchanges',
                'FAQs',
                'Unsubscribe'
            ],
            findUsOnSection: [
                'Facebook',
                'Instagram',
                'Twitter',
                'Youtube',
                'Snapchat'
            ],
            companySection: [
                'Our Story',
                'Joining the Team',
                'Legal',
                'Privacy Policy',
                'Terms & Conditions'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    background-color: $primary_dark;
    width: 100%;
    display: grid;
    grid-template-columns: 33.33% auto 33.33%;
    grid-template-rows: auto auto auto;

    .section {
        // border: 1px solid #efefef;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8%;
        box-sizing: border-box;
        
        h3 {
            color: white;
            margin: 6px 0;
            text-transform: uppercase;
            font-family: $primary_font;
            font-weight: 900;
            letter-spacing: 2px;
            font-size:16px;
        }

        .item {
            background: transparent;
            border: none;
            color:white;
            padding: 0;
            margin:3px 0;
            font-size:10px;
            letter-spacing: 1px;
        }

        .last-footer-item {
            color:white;
            font-size:10px;
        }

        &.card-symbols {
            grid-area: 2 / 1 / 2 / 4;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding:0%;

            img {
                width:80px;
                margin: 1%;
            }
        }
    }
}
</style>
