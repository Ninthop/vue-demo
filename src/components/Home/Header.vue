<template>
    <div class="head">
        <div class="head-left">
            <span class="iconfont backIcon">&#xe624;</span>
        </div>
        <div class="head-middle">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city" class="head-right">
            <div class="head-right">
                <div class="head-right-text">{{ this.city }}</div>
                <span class="iconfont cityIcon">
                    &#xe60c;
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    @import '~_style/minins.styl'
    .head
        display flex
        height 2.8rem
        background-color $bgColor
        color white

        .head-left
            .backIcon
                font-size 20px
            width 2.5rem
            float left
            display flex
            align-items center
            justify-content center
        .head-middle
            display flex
            align-items center
            flex 1
            background-color white
            border-radius 0.2rem
            margin 0.4rem 0
            padding-left 0.5rem
            color lightgray
        .head-right
            text-decoration none
            color white
            width 4.6rem
            float right
            display flex
            justify-content center
            align-items center
            padding-left 0.2rem
            padding-right 0.3rem
            font-size 0.9rem
            .head-right-text
                ellipsis()
                min-width 2rem
            .cityIcon
                margin-left 0.2rem
                margin-top 0.1rem
                font-size 0.9rem
</style>



