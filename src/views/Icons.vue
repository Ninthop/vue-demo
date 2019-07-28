<template>
    <div class="lazy">
        <router-link tag="button" to="/" class="lazy-btn">
            点此返回
        </router-link>
        <span class="decr-name">{{ this.$store.state.decr }}</span>还没做呀
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Icons'
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .lazy
        display flex
        justify-content center
        align-items center
        width 100%
        height 80vh
        .lazy-btn
            background-color $moneyColor
            border 0
            padding 0.5rem
            color white
        .decr-name
            margin-right 0.5rem
            margin-left 0.5rem
</style>
