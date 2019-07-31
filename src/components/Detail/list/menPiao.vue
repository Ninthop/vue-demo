<template>
    <!-- 门票组件 -->
    <div class="menpiao">
        <div v-for="(item, index) of detailRec" :key="index" class="menpiao-all">
            <div class="menpiao-recursive" @click="handleMpChild(item)">
                <div class="detail-rec-name">{{ item.name }}</div>
                <div class="detail-money">
                    <span class="detail-money-symbol">
                        ￥<span class="detail-money-num">{{ item.price }}</span>
                    </span>
                    起
                    <span class="iconfont cityIcon">
                        &#xe60c;
                    </span>
                </div>
            </div>
            <rec 
                :detailRec="item.children" 
                class="menpiao-children" 
                v-show="item.isShown"
            ></rec>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenPiao',
    props: {
        detailRec: Array
    },
    data () {
        return {
            showChildren: [],
            nohiddenChildren: []
        }
    },
    methods: {
        handleMpChild (item) {
            item.isShown = !item.isShown
        }
    },
    components: {
        Rec: () => import('./rec.vue')
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/minins.styl'
    @import '~_style/varibles.styl'
    .menpiao-all
        border-bottom  0.01rem solid $homeBgColor
        .menpiao-children
            padding-top 0.5rem
            background-color $homeBgColor
        .menpiao-recursive
            margin 0.8rem 0.6rem 
            &:last-of-type
                border-bottom 0
        .menpiao-recursive
            // background-color red
            position relative
            display flex
            flex-direction column
            .detail-rec-name
                // padding 0.6rem 0 0rem 0.6rem
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 2
                width 70%
                font-size 0.9rem
                line-height 1.5rem
            .detail-money
                font-size 0.5rem
                position absolute
                right 0
                top 40%
                transform translateY(-50%)
                .detail-money-symbol
                    color #ff9800
                    .detail-money-num
                        font-size 1.2rem
                        font-family Tahoma
</style>
