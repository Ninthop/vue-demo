<template>
    <!-- 周末去哪儿 -->
    <div class="week">
        <div class="week-header">
            周末去哪儿
        </div>

        <div class="week-whole" v-for="item of list" :key="item.id">
            <img class="week-img" :src="item.url" alt="">
            <div class="week-title">{{ item.title }}</div>
            <div class="week-introduction">{{ item.introduction }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekends',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/minins.styl'
    .week
        .week-header
            height 2.5rem
            display flex
            align-items center
            padding-left 0.8rem
            font-size 0.9rem
        .week-whole
            background-color white
            padding-bottom 1.2rem
            margin-bottom 0.3rem
            .week-img
                width 100%
            .week-title
                margin 0.8rem 0 0.5rem 0.6rem
                font-size 0.85rem
            .week-introduction
                margin 0 0 0 0.6rem
                font-size 0.6rem
                color gray
                ellipsis()
</style>
