<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for='item of list' :key="item.id">
                <img class="swiper-img" :src="item.url" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination ",
                    clickable: true,
                },
                loop: true,
                autoplay: true,
                observer: true,
                observeParents: true
            }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        outline none
        background-color #fff
    .wrapper
        height 0
        width 100%
        padding-bottom 26.7vw
        overflow hidden
        .swiper-img
            width 100%
</style>


