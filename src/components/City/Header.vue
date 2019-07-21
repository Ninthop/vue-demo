<template>
    <div class="header" @touchmove.prevent>
        <div>
            城市选择
            <router-link to="/">
                <div class="iconfont header-back">&#xe624;</div>
            </router-link>
        </div>
        <nav>
            <ul class="choose-two" v-bind:class="active">
                <li class="china" @click="makeActive('china')">境内</li>
                <li class="foreign" @click="makeActive('foreign')">境外·港澳台</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
    data () {
        return {
            active: 'china'
        }
    },
    methods: {
        makeActive: function(country) {
            this.active = country
            console.log(this.active)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .header
        background-color $bgColor
        color white
        text-align center
        padding-top 0.9rem
        padding-bottom 0.23rem
        .header-back
            position absolute
            top 0.6rem
            left 0.8rem
            font-size 1rem
            font-weight bold
            color white
        nav
            height 2.5rem
            .choose-two
                display flex
                position absolute
                left 50%
                transform translateX(-50%)
                width 72%
                li
                    display flex
                    justify-content center
                    align-items center
                    margin 0.9rem 0 0 0
                    border 0.05rem solid white
                    width 50%
                    height 1.25rem
                    font-size 0.9rem
            ul.foreign
                .foreign
                    background-color white
                    color $bgColor
            ul.china
                .china
                    background-color white
                    color $bgColor

</style>
