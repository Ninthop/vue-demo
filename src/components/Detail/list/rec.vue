<template>
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
            </div>
            <div class="detail-list-rec-money">
                <span class="detail-list-rec-money-symbol">
                    ￥<span class="detail-list-rec-money-num">{{ item.price }}</span>
                </span>
                <button class="detail-list-rec-money-btn">预订</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rec',
    props: {
        detailRec: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .detail-list-rec
        .detail-list-rec-all
            position relative
            margin-left 0.8rem
            margin-right 0.8rem
            padding-bottom  0.5rem
            color #616161
            font-size 0.9rem
            border-bottom 0.0625rem solid $homeBgColor
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
