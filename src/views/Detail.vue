<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from '_c/Detail/Banner.vue'
import DetailHeader from '_c/Detail/Header.vue'
import DetailList from '_c/Detail/List.vue'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .detail
        background-color $homeBgColor
</style>
