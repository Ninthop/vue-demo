<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for='item of page' :key="item.id">
                    <div class="icon-img">
                        <img class="icon-content iconList" :src="item.url" alt="">
                        <div class='icon-font'>{{ item.decr }}</div>
                    </div>
                </div>
            </swiper-slide>
            <div class="icon-swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconList: [{
                id:'001',
                url: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                decr: "景点门票"
            },{
                id:'002',
                url: "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
                decr: "古镇"
            },{
                id: '003',
                url: "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
                decr: "亲子游"
            },{
                id: '004',
                url: "http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png",
                decr: "苏州园林"
            },{
                id: '005',
                url: "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
                decr: "寒山寺"
            },{
                id: '006',
                url: "https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                decr: "华谊兄弟"
            },{
                id: '007',
                url: "http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png",
                decr: "狮子林"
            },{
                id: '008',
                url: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                decr: "拙政园"
            },{
                id: '009',
                url: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                decr: "虎丘"
            },{
                id: '010',
                url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ac9ef584416467d8cc557aad650959fd.png",
                decr: "上方山"
            }],

            swiperOption: {
                pagination: {
                    el: ".icon-swiper-pagination ",
                    clickable: true,
                }
            }
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    @import '~_style/minins.styl'
    .icons >>> .icon-swiper-pagination-bullet-active
        background-color rgba(0,175,190,.8)
    .icons >>> .icon-swiper-pagination
        margin-top 0.5rem
        text-align center
    .icons >>> .swiper-container
        padding-bottom 0.3rem
    .icons
        background-color white
        .icon
            position relative
            top 3px
            float left
            width 25%
            height 4.7rem
            margin-top 5px
            .icon-img
                text-align center
                position absolute
                left 0
                right 0
                height 4.7rem
                color $iconTextColor
                .icon-content
                    height 73.35%
                    display block
                    margin 0 auto
                .icon-font
                    font-size 14px
                    margin-top 5px
                    height 1rem
                    ellipsis()
</style>
