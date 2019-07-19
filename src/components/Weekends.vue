<template>
    <div class="week">
        <div class="week-header">
            周末去哪儿
        </div>

        <div class="week-whole" v-for="item of WeekList" :key="item.id">
            <img class="week-img" :src="item.url" alt="">
            <div class="week-title">{{ item.title }}</div>
            <div class="week-introduction">{{ item.introduction }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekends',
    data () {
        return {
            WeekList: [{
                id: '000001',
                url: "http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg",
                title: "苏州必打卡",
                introduction: "苏州必须要留下足迹的十个地标"
            },{
                id: '000002',
                url: "http://img1.qunarzz.com/sight/source/1505/70/b2f8425ce486ed.jpg_r_640x214_5db9de57.jpg",
                title: "细嗅历史的气息",
                introduction: "阅尽沧桑，不变的是恬静，待君细细品味"
            },{
                id: '000003',
                url: "http://img1.qunarzz.com/sight/source/1505/3e/18b666031b22e7.jpg_r_640x214_864dce2f.jpg",
                title: "古典园林逛个够",
                introduction: "如果是第一次来苏州，园林是一定要逛的"
            },{
                id: '000004',
                url: "http://img1.qunarzz.com/sight/source/1505/d7/5acd9640ee6cb2.jpg_r_640x214_975d2c3f.jpg",
                title: "情侣必游",
                introduction: "浪漫的乐园、静宜的园林，每一处，都弥漫这江南小镇委婉温馨的气息"
            },{
                id: '000005',
                url: "http://img1.qunarzz.com/sight/source/1507/ab/1c456b9cbffc31.jpg_r_640x214_1c2552de.jpg",
                title: "魅力江南古镇",
                introduction: "发呆静思，度过一个悠闲的下午"
            },]
        }
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
