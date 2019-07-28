<template>
    <div class="dataT">
        <div class="dataT-all">
            <div class="dataT-content dataT-all" @click.stop="handleDataShow">
                <div class="dataT-title">选择时间</div>
                这是一个还没实现的日历组件 
            </div>
            <div class="close-two" @click.stop="handleCloseTwo">X</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataTable',
    methods: {
        handleDataShow () {
            this.$emit('StopT', true)
        },
        handleCloseTwo () {
            this.$emit('CanT', false)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .dataT
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        height 100%
        z-index 150
        display flex
        align-items flex-end
        .dataT-all
            position relative
            background-color white
            width 100%
            height 23.2rem
            .close-two
                position absolute
                width 1rem
                text-align center
                padding 0.2rem
                border 0.06rem solid gray 
                border-radius 50%
                top 4%
                right 4%
            .dataT-content
                .dataT-title
                    display flex
                    height 3.125rem
                    justify-content center
                    align-items center
                    border-bottom 0.06rem solid lightgray
                    margin 0 1rem
                    font-size 1.05rem
</style>
