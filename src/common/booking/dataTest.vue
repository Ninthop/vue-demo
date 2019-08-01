<template>
    <div class="date">
        <div tabindex="0" class="date-header">
            {{ date }}
        </div>
        <div class="date-all">
            <div class="date-nav">
                <span @click="monthPre">&lt;</span>
                <span>{{ time.year }}年{{ time.month+1 }}月</span>
                <span @click="monthNext">&gt;</span>
            </div>
            <div class="date-content">
                <div v-for="(item,index) of week" :key="index*100" class="date-week">{{ item }}</div>
                <div v-for="i in 6" :key="i">
                    <span 
                        v-for="j in 7" :key="j"
                        @click.stop="chooseDate(visibleDays[(i-1)*7 + (j-1)])"
                        :class="[
                            {notCurrentMonth: !isCurrentMonth(visibleDays[(i-1)*7 + (j-1)])},
                            {isToday: isToday(visibleDays[(i-1)*7 + (j-1)])},
                            {isSelect: isSelect(visibleDays[(i-1)*7 + (j-1)])}
                        ]"
                    >
                        {{ visibleDays[(i-1)*7 + (j-1)].getDate() }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as util from '_common/util/util.js'

export default {
    name: 'Calendar',
    props: {
        value: {
            type: Date,
            default: () => new Date()
        }
    },
    data () {
        let {year, month} = util.getYMD(this.value)
        return {
            week: ['日', '一', '二', '三', '四', '五', '六'],
            time: {year, month}
        }
    },
    methods: {
        isCurrentMonth (date) {
            let {year, month} = util.getYMD(new Date(this.time.year, this.time.month))
            let {year:y, month:m} = util.getYMD(date)
            return year === y && month === m
        },
        isToday (date) {
            let {year, month, day} = util.getYMD(new Date())
            let {year:y, month:m, day:d} = util.getYMD(date)
            return year === y && month === m && day ===d
        },
        chooseDate (date) {
            let {year, month, day} = util.getYMD(new Date())
            let d = new Date(year, month, day)
            if(date > d && date.getMonth() <= d.getMonth()+3){
                this.time = util.getYMD(date)
                this.$emit('input', date)
                this.$store.dispatch('changeDate', date)
                this.$emit('blur')
            }
        },
        isSelect (date) {
            let {year, month, day} = util.getYMD(this.$store.state.date)
            let {year:y, month:m, day:d} = util.getYMD(date)
            return year === y && month === m && day ===d
        },
        monthPre () {
            let thisMonth = new Date()
            let d = new Date(this.time.year, this.time.month)
            if (d.getMonth() > thisMonth.getMonth()){
                d.setMonth(d.getMonth()-1)
            }
            this.time = util.getYMD(d)
        },
        monthNext () {
            let thisMonth = new Date()
            let d = new Date(this.time.year, this.time.month)
            if (d.getMonth() < thisMonth.getMonth()+3){
                d.setMonth(d.getMonth()+1)
            }
            this.time = util.getYMD(d)
        }
    },
    computed: {
        date: function () {
            let date = this.value
            let {year, month, day} = util.getYMD(date)
            return `${year}-${month+1}-${day}`
        },
        visibleDays () {
            let {year, month} = util.getYMD(new Date(this.time.year, this.time.month, 1))
            let currentFirstDay = new Date(year, month, 1)
            let week = currentFirstDay.getDay()
            let startDay = currentFirstDay.getTime() - week * 60 * 60 * 1000 * 24 //列表循环的第一天
            let dateArr = []
            for (let i = 0; i < 42; i++) {
                dateArr.push(new Date(startDay + i*60*60*1000*24))
            }
            return dateArr
        }
    }
}
</script>

<style lang="stylus" scoped>
    .date
        display flex
        justify-content center
        .date-header
            outline none
        .date-all
            display inline-block
            position absolute
            background-color white
            user-select none
            // border 1px solid red
            .date-nav
                line-height 2rem
                display flex
                justify-content space-around
            .date-content
                .date-week
                    display inline-block
                    width 3rem
                    text-align center
                    line-height 2rem
                div
                    span
                        display inline-block
                        width 3rem
                        text-align center
                        line-height 2.5rem
                    .notCurrentMonth
                        color lightgray
                    .isToday
                        color white
                        background-color lightgray
                        border-radius 4px
                        transition 0.5s
                    .isSelect
                        color white
                        background-color #523689
                        border-radius 4px
                        transition 0.5s
</style>
