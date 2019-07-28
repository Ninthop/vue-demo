<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list-intro></detail-list-intro>
            <detail-list 
                :detailList="detailList"
                :detailRec="detailRec"
            ></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from '_c/Detail/Banner.vue'
import DetailHeader from '_c/Detail/Header.vue'
import DetailListIntro from '_c/Detail/ListIntro.vue'
import DetailList from '_c/Detail/List.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailListIntro,
        DetailList
    },
    data () {
        return {
            detailRec: [],
            detailList: []
        }
    },
    computed: {
        ...mapState(['attraction'])
    },
    mounted () {
        axios
        .get('mock/list.json?attra=' + this.attraction)
        .then(response => {
            const data = response.data.data
            this.detailList = data.detailList
            this.detailRec = data.detailRec
            })
        .catch(function (error) { // 请求失败处理
            console.log(error);
        });
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .detail
        background-color $homeBgColor
</style>
