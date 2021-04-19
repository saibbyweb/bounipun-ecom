<template>
<div class="color-picker">
    <h2 class="heading" @click="fetchColors"> Bounipun Colors </h2>
    <!-- populate colors -->
    <div class="color-data" v-for="(category, index) in allColors" :key="index">
        <Accordion :heading="category.name">
            <!-- category name -->
            <!-- <span class="category-name"> {{ category.name }} </span> -->
            <!-- color list -->
            <div class="color-list">
                <div @click="toggleSelect(color)" v-for="color in category.colors" :key="color._id" class="color-box center-col">
                    <img v-if="isSelected(color._id)" class="selected" src="/icons/green_check.png" />
                    <div style="height:40px; width:40px;" :style="{backgroundImage: `url(${color.image})`}" class="shadow box" :class="{active: isSelected(color._id)}"> </div>
                    <span class="color-name"> {{ color.name }} </span>
                    <span class="color-code"> {{ color.code }} </span>
                </div>
            </div>

        </Accordion>
        <!-- <hr align="left" /> -->
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            model: 'colors',
            allColors: [],
            selectedColors: []
        }
    },
    mounted() {
        this.fetchColors();
    },
    methods: {
        async fetchColors() {
            this.loading = true;
            const result = await this.$fetchCollection(this.model, 'admin');
            this.loading = false;
            const categories = Object.keys(result.docs)

            categories.forEach(catgeory => {
                this.allColors.push({
                    name: catgeory,
                    colors: result.docs[catgeory].map(color => {
                        return {
                            _id: color._id,
                            name: color.name,
                            code: color.code,
                            image: process.env.baseAWSURL + color.image
                        }
                    })
                })
            })

            console.log(this.allColors, 'colors fetched');
        },
        isSelected(colorId) {
            return this.selectedColors.findIndex(color => color._id === colorId) !== -1
        },
        toggleSelect(color) {
            /* check if already exists */
            let selectedColors = this.selectedColors;
            const foundIndex = selectedColors.findIndex(col => col._id === color._id);

            /* if exists */
            if (foundIndex !== -1) {
                const deselectedColor = selectedColors[foundIndex];
                selectedColors.splice(foundIndex, 1);
                this.$emit('colorRemoved', deselectedColor);
                /* console.log('color removed') */
                return;
            }

            console.log('new color pushed')

            /* selected color */
            const selected = {
                _id: color._id,
                name: color.name,
                code: color.code
            };

            selectedColors.push(selected);
            this.selectedColors = selectedColors;
            this.$emit('colorAdded', selected);
        },
        deselectColor(color) {
            const foundIndex = this.selectedColors.findIndex(col => col._id === color._id);
            if (foundIndex !== -1) {
                // const deselectedColor = selectedColors[foundIndex];
                this.selectedColors.splice(foundIndex, 1);
            }
        },
        populateColorSelection(list) {
            this.selectedColors = list.map(color => {
                return {
                    _id: color._id,
                    name: color.name,
                    code: color.code
                }
            });
            console.log('list populated');
        }
    }
}
</script>

<style lang="scss" scoped>
.color-picker {
    .heading {
        font-size: 15px;
    }

    .color-data {

        .category-name {
            font-size: 13px;
        }

        .color-list {
            display: flex;
            flex-wrap: wrap;

            .color-box {
                margin: 3px;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                position: relative;
                width: 22%;

                * {
                    transition: all 0.2s ease-in-out;
                }

                /* active box */
                .active {
                    border: 1px solid #348877;
                }

                /* actual chip box */
                .box {
                    border-radius: 3px;

                    &:hover {
                        transform: scale(1.05);

                    }
                }

                .selected {
                    position: absolute;
                    top: -6%;
                    right: -1%;
                    width: 40%;
                    z-index: 2;
                }

                .color-name {
                    margin-top: 3px;
                    font-size: 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 100%;
                }

                .color-code {
                    font-weight: 900;
                    font-size: 10px;
                }
            }

        }

        hr {
            width: 90%;
            opacity: 0.3;
        }
    }
}
</style>
