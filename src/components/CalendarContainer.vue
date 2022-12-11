<template>
    <ScheduleMonth @targetted="updateTarget"/>
    <DayData v-if="Object.keys(currTarget).length !== 0" :day="currTarget" :availableTimes="this.targetRecurring" @submitRecurring="addRecurring" @deleted="deleteEvent" />
</template>

<script>
import ScheduleMonth from './ScheduleMonth.vue';
import DayData from "./DayData.vue";
import dayjs from 'dayjs';
    export default {
        components: {
            ScheduleMonth,
            DayData,
        },
        data () {
            return {
                currTarget: {}
            }
        },
        computed: {
            targetRecurring () {
                const dayOfWeek = dayjs(this.currTarget).day();
                return this.recurring[dayOfWeek];
            }
        },
        methods: {
            updateTarget(date) {
                this.currTarget = date;
            }
        }
       
    }
</script>