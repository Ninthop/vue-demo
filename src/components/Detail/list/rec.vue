<template>
    <!-- 去哪儿推荐、以及门票下拉组件 -->
    <div class="detail-list-rec">
        <div v-for="(item, index) of detailRec" :key="index" class="detail-list-rec-all">
            <div class="detail-list-rec-left">
                <div class="detail-list-rec-title">{{ item.title }}</div>
                <div class="detail-list-rec-time">{{ item.time }}</div>
                <div class="detail-list-rec-special">
                    <span 
                        class="detail-list-rec-special-item" 
                        v-for="(special, index) of item.children" 
                        :key="(index+1)*10"
                    >
                        {{ special }}
                    </span>
                </div>
                <div class="detail-list-rec-seller">
                    {{ item.seller }}
                    <div class="detail-list-rec-seller-intro" v-if="item.seller">预定须知></div>
                </div>
            </div>
            <div class="detail-list-rec-money">
                <span class="detail-list-rec-money-symbol">
                    ￥<span class="detail-list-rec-money-num">{{ item.price }}</span>
                </span>
                <button class="detail-list-rec-money-btn" @click.stop="bookAppear">预订</button>
            </div>
        </div>
        <div class="rec-booking-background" v-if="bookIsShow"></div>
        <transform>
            <booking @Stop="handleStop" v-show="bookIsShow" @Can="handleStop"></booking>
        </transform>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Rec',
    props: {
        detailRec: Array
    },
    data () {
        return {
            bookIsShow: false
        }
    },
    components: {
        Booking: () => import('_common/booking/booking.vue'),
        Transform: () => import('_common/animation/transform.vue')
    },
    methods: {
        handleStop (bool) {
            this.bookIsShow = bool
        },
        bookAppear () {
            this.bookIsShow = true
        }
    },
    mounted(){
        var that = this
        document.addEventListener('click', function(e){
            that.bookIsShow = false
        })
    },
    destroyed () {
        document.removeEventListener('click', function(e){
            that.bookIsShow = false        
        })
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .detail-list-rec
        .rec-booking-background
            position fixed
            left 0
            right 0
            top 0
            bottom 0
            background rgba(0,0,0,0.5)
            z-index 100
        .detail-list-rec-all
            position relative
            margin-left 0.8rem
            margin-right 0.8rem
            padding-bottom  0.5rem
            color #616161
            font-size 0.9rem
            border-bottom 0.0625rem solid #dadada
            &:last-of-type
                border-bottom 0 
            .detail-list-rec-money
                font-size 0.8rem
                position absolute
                right 0
                top 50%
                transform translateY(-50%)
                .detail-list-rec-money-btn
                    display block
                    background-image linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
                    border 0
                    height 2rem
                    width 5rem
                    color white
                    border-radius 0.3rem
                    text-align center
                    outline none
                .detail-list-rec-money-symbol
                    color #ff9800
                    display flex
                    justify-content center
                    align-items flex-end
                    .detail-list-rec-money-num
                        font-size 1.25rem
                        font-family Tahoma
            .detail-list-rec-left
                width 70%
                .detail-list-rec-seller
                    display flex
                    flex row
                    padding-top 0.4rem
                    font-size 0.8rem
                    .detail-list-rec-seller-intro
                        margin-left 0.4rem
                .detail-list-rec-title
                    margin-top 0.5rem
                    line-height 1.5rem
                .detail-list-rec-time
                    font-size 0.7rem
                .detail-list-rec-special
                    margin-top 0.5rem
                    .detail-list-rec-special-item
                        display inline-block
                        margin-right 0.5rem
                        border 0.01rem solid #a5e4ec
                        padding 0.1rem
                        color $bgColor
                        font-size 0.5rem

</style>
