<template>
    <div class="book">
        <div class="book-content">
            <div @click.stop="handleBookShow">
                <div class="book-content-header">
                    <h2  class="book-content-title">【提前一天预订，原始森林水狂欢】苏州乐园森林水世界成人票</h2>
                    <span class="book-content-price">
                        ￥<span class="book-content-price-number">178</span>
                    </span>/张
                </div>
                <div class="book-content-data">
                    <span class="book-content-data-title">价格日历</span>
                    <div class="book-content-datas" :class="active">
                        <span class="book-content-datas-today datas">
                            <div>今天</div>
                            <div>{{ today }}日</div>
                        </span>
                        <span class="book-content-datas-tomorrow datas" @click="makeBookActive('book-content-datas-tomorrow')">
                            <div class="datas-title">明天</div>
                            <div class="data-number">{{ tomorrow }}日</div>
                        </span>
                        <span class="book-content-datas-DA-tomorrow datas" @click="makeBookActive('book-content-datas-DA-tomorrow')">
                            <div class="datas-title">后天</div>
                            <div class="data-number">{{ dayAfterTomorrow }}日</div>
                        </span>
                        <span class="book-content-datas-other datas" @click="dataTableShow">
                            <div class="datas-title">其他日期</div>
                            <div class="data-number" 
                                v-show="ohterDateShown()"
                            >
                                {{ this.$store.state.date.getMonth()+1 }}月{{ this.$store.state.date.getDate() }}日
                            </div>
                        </span>
                    </div>
                </div>
                <div class="book-content-note">需要在游玩前1天的23:59前预订</div>
                <div class="booking">立即预订</div>
            </div>
            <div class="close" @click="handleClose">X</div>
        </div>
        <transform>
            <data-table @StopT="handleStopT" v-show="dataIsShow" @CanT="handleStopT"></data-table>
        </transform>
    </div>
</template>

<script>
import DataTable from './data.vue'
import Transform from '_common/animation/transform.vue'
import { mapState } from 'vuex'

var d = new Date()

export default {
    name: 'Booking',
    data () {
        return {
            active: 'book-content-datas-tomorrow',
            Month: 1,
            Day: 1,
            dataIsShow: false
        }
    },
    components: {
        DataTable,
        Transform
    },
    methods: {
        handleBookShow () {
            this.$emit('Stop', true)
        },
        handleClose () {
            this.$emit('Can', false)
        },
        makeBookActive (data) {
            this.active = data
        },
        handleStopT (bool) {
            this.dataIsShow = bool
            this.$emit('Stop', true)
            this.makeBookActive('book-content-datas-other')
        },
        dataTableShow () {
            this.dataIsShow = true
        },
        ohterDateShown () {
            return this.$store.state.date.getDate() != d.getDate() || this.$store.state.date.getMonth() != d.getMonth()
        }
    },
    mounted(){
        var that = this
        document.addEventListener('click', function(e){
            that.dataIsShow = false
            that.makeBookActive('book-content-datas-tomorrow')
        })
    },
    destroyed () {
        document.removeEventListener('click', function(e){
            that.dataIsShow = false        
        })
    },
    computed: {
        today: function () {
            let date = new Date()
            let todayM = date.getMonth() + 1 
            let todayD = date.getDate()
            return `${todayM}月${todayD}`
        },
        tomorrow: function () {
            let date = new Date()
            date.setDate(date.getDate()+1)
            let tomorrowD = date.getDate()
            let tomorrowM = date.getMonth() + 1
            return `${tomorrowM}月${tomorrowD}`
        },
        dayAfterTomorrow: function () {
            let date = new Date()
            date.setDate(date.getDate()+2)
            let tomorrowD = date.getDate()
            let tomorrowM = date.getMonth() + 1
            return `${tomorrowM}月${tomorrowD}`
        }
        // otherMonth: () => {
        //     return otherDate.getMonth()+1
        // },
        // otherDay: () => {
        //     return otherDate.getDate()
        // }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .book
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        height 100%
        z-index 100
        display flex
        align-items flex-end
        .close
            position absolute
            top 4%
            right 3%
            height 1rem
            width 1rem
            text-align center
            color gray
            border 0.09rem solid gray
            padding-top 0.3rem
            padding-left 0.1rem
            padding-right 0.1rem
            font-size 0.5rem
            border-radius 50%
        .book-content
            position relative
            background white
            width 100%
            height 15.75rem
            .book-content-note
                margin-top 0.7rem
                margin-left 0.5rem
                font-size 0.7rem
                color $moneyColor
            .book-content-data
                .book-content-data-title
                    display inline-block
                    margin 1.3rem 0 0.5rem 0.5rem
                    font-size 0.8rem
                    color black
                .book-content-datas
                    display flex
                    flex-direction row
                    justify-content center
                    justify-content space-between
                    margin 0 0.6rem
                    color black
                    .book-content-datas-today
                        color #dedede
                    .datas
                        display inline-block
                        height 2.5rem
                        width 22%
                        border 0.06rem solid #dedede
                        border-radius 0.3rem
                        display flex
                        flex-direction column 
                        justify-content center
                        align-items center
                        font-size 0.9rem
                        line-height 1.1rem
                        .data-number
                            font-size 0.7rem
            .book-content-header
                font-size 0.5rem
                color #9e9e9e
                .book-content-title
                    margin 0.8rem 1rem 0 0.8rem
                    width 88%
                    line-height 1.3rem
                    font-size 1.05rem
                    color black
                    .book-content-close
                        float right
                        position absolute
                        top 0
                .book-content-price
                    color #ff9800
                    display inline-block
                    margin 0.5rem
                    font-size 0.8rem
                    .book-content-price-number
                        font-weight bold
                        font-size 1.1rem
            .booking
                position absolute
                bottom 0
                left 50%
                text-align center
                background-color #ff9800
                width 100%
                transform translateX(-50%)
                line-height 3.125rem
                color white
                font-size 1.1rem
            .book-content-data
                div.book-content-datas-tomorrow
                    .book-content-datas-tomorrow
                        background-color $bgColor 
                        color white !important
                div.book-content-datas-DA-tomorrow
                    .book-content-datas-DA-tomorrow
                        background-color $bgColor 
                        color white !important
                div.book-content-datas-other
                    .book-content-datas-other
                        background-color $bgColor 
                        color white !important
</style>
