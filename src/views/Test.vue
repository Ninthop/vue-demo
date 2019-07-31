<template>
    <div>
        <calendar
            v-model="value"
        >
        </calendar>
    </div>
</template>

<script>
import Calendar from '_common/booking/dataTest.vue'

export default {
    name: 'DateTest',
    data () {
        return {
            value: new Date()
        }
    },
    // methods: {
    //     changeDate (date) {
    //         this.now = date
    //     }
    // },
    components: {
        Calendar
    }
}
</script>

<style lang="stylus" scoped>

</style>
