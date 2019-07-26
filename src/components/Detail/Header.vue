<template>
    <div>
        <div class="header-abs" v-show="showAbs">
            <div @click="handleBackClick" class="iconfont banner-back">&#xe624;</div>
        </div>
        <div class="header-fixed" v-show="showFixed"  :style="opacityStyle">
            <div @click="handleBackClick" class="iconfont">&#xe624;</div>
            <div class="fixed-text">苏州乐园森林水世界</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            showFixed: false,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleBackClick () {
            this.$router.go(-1)
        },
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top <= 0){
                this.showFixed = false
                this.showAbs = true
            }else if(top > 0 && top < 40) {
                this.showFixed = false
                this.showAbs = false
            }else if(top <= 180 && top >= 40){
                this.showAbs = false
                const opacitynum = top / 180
                this.opacityStyle = { opacity: opacitynum }
                this.showFixed = true
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .header-abs
        .banner-back
            position absolute
            top 0.2rem
            left 0.2rem
            background-color rgba(0,0,0,0.5)
            padding 0.5rem
            border-radius 50%
            color white
            font-size 1.2rem
            font-weight bold
    .header-fixed
        position fixed
        top 0
        background-color $bgColor
        width 100%
        height 2.5rem
        color white
        z-index 100
        .iconfont
            position absolute
            display flex
            top .2rem
            left .2rem
            font-size 1.2rem
            font-weight bold
            padding 0.5rem
        .fixed-text
            position absolute
            top 50%
            left 50%
            transform translateX(-50%) translateY(-50%)
</style>
