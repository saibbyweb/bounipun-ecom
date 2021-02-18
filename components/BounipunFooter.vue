<template>
<div class="footer">
    <!-- help section -->
    <div class="center">
        <div id="help" class="section">
            <h3> Help </h3>
            <Button class="item" v-for="item in helpSection" :key="item"> {{ item }} </Button>
        </div>
    </div>

    <!-- find us on section -->
    <div class="center">
        <div id="find-us-on" class="section">
            <h3> Find Us On </h3>
            <Button class="item" v-for="item in findUsOnSection" :key="item"> {{ item }} </Button>
        </div>
    </div>

    <!-- company section -->
    <div class="center">
        <div id="company" class="section">
            <h3> Comapny </h3>
            <Button class="item" v-for="item in companySection" :key="item"> {{ item }} </Button>
        </div>
    </div>

    <!-- card symbols section -->
    <div id="card-symbols" class="section">
        <img src="/icons/visa.png" />
        <img src="/icons/maestro.png" />
        <img src="/icons/master_card.png" />
        <img src="/icons/american_express.png" />
    </div>

    <!-- copyright -->
    <div id="copyright" class="section">
        <span class="last-footer-item"> © 2005 - 2020 Bounipun </span>
    </div>

    <!-- crafted in kashmir -->
    <div id="crafted-in-kashmir" class="section">
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
                'Pinterest'
                // 'Youtube',
                // 'Snapchat'
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
    padding: 1% 0 2% 0;
    box-sizing: border-box;

    @media (max-width: $breakpoint-tablet) {
        grid-template-columns: 50% 50%;
        padding: 2% 0 5% 0;
    }

    .center {
        align-items: flex-start;
    }

    .section {
        // border: 1px solid #efefef;
        display: flex;
        box-sizing: border-box;

        @media (max-width: $breakpoint-tablet) {
            padding: 8%;
        }

        /* help, find us on, company */
        &#help,
        &#find-us-on,
        &#company {
            padding: 2%;
            flex-direction: column;
            align-items: flex-start;

            h3 {
                color: white;
                margin: 6px 0;
                text-transform: uppercase;
                font-family: $font_2_semibold;
                font-weight: 900;
                letter-spacing: 2px;
                font-size: 1.5vw;

                @media (max-width: $breakpoint-tablet) {
                    font-size: 4vw;
                }
            }

            .item {
                background: transparent;
                border: none;
                color: white;
                padding: 0;
                margin: 3px 0;
                font-size: 1vw;
                color: #efefef;

                @media (max-width: $breakpoint-tablet) {
                    font-size: 2.8vw;
                }
            }
        }

        /* card symbols */
        &#card-symbols {
            grid-area: 2 / 1 / 2 / 4;
            align-items: center;
            justify-content: center;
            padding: 0%;
            display: grid;
            grid-template-columns: 30% 30%;
            grid-template-rows: 30% 30%;

            img {
                width: 80px;
                margin: 1%;

                &:nth-child(1) {
                    justify-self: center;
                    align-self: center;
                }

                &:nth-child(2) {
                    justify-self: center;
                    align-self: center;
                }

                &:nth-child(3) {
                    justify-self: center;
                    align-self: center;
                }

                &:nth-child(4) {
                    justify-self: center;
                    align-self: center;
                }
            }

            @media (max-width: $breakpoint-tablet) {
                grid-area: auto;

                img {
                    width: 85%;
                }
            }
        }

        &#copyright,
        &#crafted-in-kashmir {
            align-items: center;
            padding: 0 5%;

            @media (max-width: $breakpoint-tablet) {
                justify-content: center;
                padding: 5%;
            }
        }

        /* crafted in kashmir */
        &#crafted-in-kashmir {
            grid-column: 3;
            justify-content: flex-end;

            @media (max-width: $breakpoint-tablet) {
                grid-column: auto;
                justify-content: flex-start;
            }
        }

        .last-footer-item {
            color: white;
            font-size: 15px;

            @media (max-width: $breakpoint-tablet) {
                font-size: 2.8vw;
            }
        }

    }
}
</style>
