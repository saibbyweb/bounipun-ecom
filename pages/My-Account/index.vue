<template>
<div class="page -wh my-account">
    <!-- account header -->
    <div class="account-header">
        <!-- initials -->
        <div class="initials-container center">
            <div class="initials center">
                <span> SK </span>
            </div>
        </div>

        <!-- name and phone number -->
        <div class="name-and-phonenumber">
            <span class="name"> Suhaib Khan </span>
            <span class="phone-number"> +91-9906697711 </span>
        </div>

    </div>
    <!-- account page list -->
    <div class="account-page-list">
        <div @click="$router.push('/my-account/'+page.path)" class="account-page-item" v-for="(page, index) in pages" :key="index">

            <!-- icon -->
            <div class="icon-box center">
                <img class="icon" :src="'/icons/account/'+page.icon" />
            </div>
            <!-- name and description -->
            <div class="name-and-desc">
                <span class="name"> {{ page.name }} </span>
                <span class="desc"> {{ page.description }} </span>
            </div>

            <!-- arrow -->
            <div class="arrow-box center">
                <img class="arrow" src="/icons/account/arrow.png" />
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    head() {
    return {
      title: "My Account | Bounipun Kashmir"
    }
  },
    data() {
        return {
            pages: [{
                name: "My Orders",
                description: "Track your orders",
                icon: "orders.png",
                path: 'orders'
            },
            
            // {
            //     name: "Address Book",
            //     description: "Save addresses for quick checkouts",
            //     icon: "address.png",
            //     path: "address-book"
            // },
            
            {
                name: "Profile Details",
                description: "View or manage your profile",
                icon: "profile.png",
                path: "profile-details"
            }
            // ,{
            //     name: "Gift Cards",
            //     description: "Redeem of send gift cards.",
            //     icon: "giftcards.png",
            //     path: "gift-cards"
            // }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.my-account {
    .account-header {
        background-color: $dark_gray;
        height: 25vw;
        display: flex;

        /* initials */
        .initials-container {
            width: 35vw;

            .initials {
                background-color: white;
                border-radius: 50%;
                width: 15vw;
                height: 15vw;

                span {
                    color: $dark_gray;
                    font-family: $font_2_bold;
                    font-size: 19px;
                }
            }
        }

        /* name and phone number */
        .name-and-phonenumber {
            width: 65vw;
            display: flex;
            flex-direction: column;
            justify-content: center;

            span {
                color: white;

                &.name {
                    font-size: 19px;
                }

                &.phone-number {
                    font-size: 13px;
                }
            }

        }

    }

    .account-page-list {
        background-color: white;
        padding-top:5%;
        .account-page-item {
            display: flex;
            background-color: white;
            padding: 15px 10px;
            border-bottom: 1px solid rgba(51, 51, 51, 0.1);
            cursor: pointer;
            
            .icon-box {
                width: 20vw;

                .icon {
                    width: 25%;
                    opacity: 0.8;
                }
            }

            .name-and-desc {
                display: flex;
                flex-direction: column;
                width: 70vw;

                .name {
                    font-size: 13px;
                }

                .desc {
                    color: $gray;
                    font-size: 11px;
                }
            }

            .arrow-box {
                width: 10vw;

                .arrow {
                    width: 20%;
                }
            }
        }
    }
}
</style>
