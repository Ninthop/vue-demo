<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img class="swiper-img" :src="item.url" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination ",
                    clickable: true,
                },
                loop: true,
                autoplay: true
            },
            swiperList: [{
                id: '01',
                url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
            },{
                id: '02',
                url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/4d35a34ee1637399d403704b18331d4d.jpg_750x200_2886cd69.jpg"
            },{
                id: '03',
                url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg"
            }]
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


