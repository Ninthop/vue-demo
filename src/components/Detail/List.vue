<template>
    <div class="detail-list">
        <div
            class="detail-list-item border-bottom"
            v-for="(item, index) of detailRec"
            :key="index"
        >
        <span class="detail-list-item-title">{{ item.title }}</span>
        <rec :detailRec="item.children"></rec>
        </div>
        <div
            class="detail-list-item"
            v-for="(item2, index) of detailList"
            :key="(index+1)*10"
        >
        <span class="detail-list-item-title">{{ item2.title }}</span>
            <div    
                v-if="item2.children"
                class="detail-list-item2-child"
            >
                <men-piao :detailRec="item2.children"></men-piao>
            </div>
        </div>
    </div>
</template>

<script>
import MenPiao from './list/menPiao.vue'
import Rec from './list/rec.vue'

export default {
    name: 'DetailList',
    props: {
        detailList: Array,
        detailRec: Array
    },
    components: {
        MenPiao,
        Rec
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/minins.styl'
    .detail-list
        margin-top 0.3rem
        .detail-list-item
            background-color white
            margin-bottom 0.5rem
            .detail-list-item-title
                padding 1rem 1rem
                border-bottom  0.01rem solid lightgray
                display flex
                align-items center
</style>
