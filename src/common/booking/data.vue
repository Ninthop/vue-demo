<template>
    <div class="dataT">
        <div class="dataT-all">
            <div class="dataT-content dataT-all" @click.stop="handleDataShow">
                <calendar
                    class="calendar"
                    v-model="value"
                    @blur="hidden"
                >
                </calendar>
            </div>
            <div class="close-two" @click.stop="handleCloseTwo">X</div>
        </div>
    </div>
</template>

<script>
import Calendar from '_common/booking/dataTest.vue'
import { mapState } from 'vuex'

export default {
    name: 'DataTable',
    methods: {
        handleDataShow () {
            this.$emit('StopT', true)
        },
        handleCloseTwo () {
            this.$emit('CanT', false)
        },
        hidden () {
            this.$emit('CanT', false)
        }
    },
    data () {
        return {
            value: this.$store.state.date
        }
    },
    components: {
        Calendar
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
            .calendar
                margin-top 2.5rem
            .close-two
                position absolute
                width 1rem
                text-align center
                padding 0.2rem
                border 0.06rem solid gray 
                border-radius 50%
                top 4%
                right 4%
</style>
