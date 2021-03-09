<template>
<div class="header center-col">
    <!-- bounipun logo -->
    <div class="logo center">
        <img src="/icons/light/logo.png" />
    </div>

    <div class="menu-links center">
        <div class="menu-item" v-for="(item,index) in items" :key="index">
            <span> {{ item.name }} </span>
        </div>
    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    name: 'Products',
                    path: '/products',
                    desc: 'Manage Bounipun inventory'
                },
                {
                    name: 'Collections',
                    path: '/',
                    desc: 'Manage techniques'
                },
                {
                    name: 'Categories',
                    path: '/categories',
                    desc: 'Add or remove list of categories'
                },
                {
                    name: 'Fabrics',
                    path: '/fabrics',
                    desc: 'Manage list and details of various fabrics'
                },
                {
                    name: 'Colors',
                    path: '/colors',
                    desc: 'Manage bounipun colors'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
//
.header {
    padding:10px;
    background-color: $dark_gray;
    .logo {
        width:15%;
        img {
            width:100%;
        }
    }
    .menu-links {
        width:100%;
        padding-top: 10px;
        .menu-item {
            padding:10px 3%;
            color:$dark_gray;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            span {
                color: rgb(208, 208, 208);
            }

            &:hover {
                background-color: #c8c8c8ca;
                // box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
                //   transform: translateX(-3px);
                span {
                    color:$dark_gray;
                  
                }
            }
        }

    }
}
</style>
