<template>
<li class="calendar-day" :class="isMonth ? 'month-shade' : 'not-month-shade'" @click="$emit('targetted', this.day.date)">
    <span>
        {{label}}
    </span>
</li>
</template>

<script>
import dayjs from 'dayjs'

export default {
    name: 'ScheduleDay',

    props: {
        day: {
            type: Object,
            required: true
        },
        dayOfWeek: {
            type: Number
        },
        
        isMonth: Boolean,
    },
    computed: {
        label() {
            return dayjs(this.day.date).format('D');
        },
        getDay () {
            const day = dayjs(this.day.date).day();
            return day;
        },
        getRecurringEvents () {
            return ""
        }
    },
    methods: {
    }

}
</script>

<style scoped>
.month-shade {
    background-color: #fff;
}
.not-month-shade {
    background-color: var(--grey-100);
}
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  color: var(--grey-800);
  padding: 5px;
}
</style>