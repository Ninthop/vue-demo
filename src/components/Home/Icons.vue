<template>
    <!-- 首页图标部分 -->
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <router-link 
                    class="icon" 
                    v-for='item of page' 
                    :key="item.id"
                    tag="div"
                    :to="'/icons/' + item.decr"
                >
                    <div class="icon-img" @click="handleEmit(item.decr)">
                        <img class="icon-content iconList" :src="item.url" alt="">
                        <div class='icon-font'>{{ item.decr }}</div>
                    </div>
                </router-link>
            </swiper-slide>
            <div class="icon-swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: ".icon-swiper-pagination ",
                    clickable: true,
                }
            }
        }
    },
    methods: {
        handleEmit (decr) {
            this.$store.dispatch('changeIcons', decr)
        }
    },
    computed: {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
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
