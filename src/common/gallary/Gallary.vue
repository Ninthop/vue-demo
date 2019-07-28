<template>
    <div class="banner-gallary" @click="handleGallaryBackClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(img, index) of imgs" :key="index">
                    <img class="gallary-img swiper-lazy" :data-src="img"/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Gallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                observer:true,
                observeParents:true,
                lazy: true
            }
        }
    },
    methods: {
        handleGallaryBackClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner-gallary >>> .swiper-container
        overflow inherit
    .banner-gallary
        background-color black
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        z-index 99
        display flex
        align-items center
        .wrapper
            width 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -9.8rem
                font-size 1rem
</style>
