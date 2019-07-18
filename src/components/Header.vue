<template>
    <div class="head">
        <div class="head-left">
            <span class="iconfont backIcon">&#xe624;</span>
        </div>
        <div class="head-middle">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="head-right">
            城市
            <span class="iconfont cityIcon">
                &#xe60c;
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .head
        display flex
        height 2.8rem
        background-color $bgColor
        color white
        .head-left
            .backIcon
                font-size 20px
            width 3.2rem
            float left
            display flex
            align-items center
            justify-content center
        .head-middle
            display flex
            align-items center
            flex 1
            background-color white
            border-radius 0.3rem
            margin 0.5rem 0
            padding-left 0.5rem
            color lightgray
        .head-right
            .cityIcon
                margin-left 0.2rem
                margin-top 0.1rem
                font-size 0.9rem
            width 4.2rem
            float right
            display flex
            align-items center
            justify-content center
</style>



