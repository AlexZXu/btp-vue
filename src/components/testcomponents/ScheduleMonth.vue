<template>
<div class="calendar-month">
    <div class="calendar-month-header">
        
    </div>

    <ScheduleWeekdays />

    <ol class="days-grid">
        <ScheduleDay 
            v-for="leadingDay in emptyStartDays"
            :key="leadingDay.date"
            :day="leadingDay"
            :isMonth="false"
            @targetted="(n) => $emit('targetted', n)"
        />
        <ScheduleDay 
            v-for="day in days"
            :key="day.date"
            :day="day"
            :isMonth="true"
            @targetted="(n) => $emit('targetted', n)"
        />
        <ScheduleDay 
            v-for="endingDay in emptyEndDays"
            :key="endingDay.date"
            :day="endingDay"
            :isMonth="false"
            @targetted="(n) => $emit('targetted', n)"
        />
    </ol>
</div>

</template>

<script>
import dayjs from 'dayjs'
import ScheduleWeekdays from './ScheduleWeekdays';
import ScheduleDay from './ScheduleDay';

export default {
    name: 'ScheduleMonth',
    components: {
        ScheduleWeekdays,
        ScheduleDay,
    },
    data() {
        return {
            difference: 0,
        }
    },
    props: {
        recurring: {
            type: Array
        }
    },
    methods: {
        test (obj) {
            console.log(obj)
        },
    },
    computed: {
        daysInMonth() {
            return dayjs().month(this.currentMonth).daysInMonth();
        },
        lastDaysInMonth() {
            return dayjs().month(this.currentMonth - 1).daysInMonth();
        },
        currentYear() {
            return dayjs().year();
        },
        currentMonth() {
            const month = dayjs().month() + this.difference;
            console.log("Month: " + month);
            return month;
        },
        days() {
            return [...Array(this.daysInMonth)].map((day, index) => {
                return {
                    date: dayjs(`${this.currentYear}-${this.currentMonth + 1}-${index + 1}`)
                }
            })
        },
        leadingDays () {            
            const j = dayjs(`${this.currentYear}-${this.currentMonth + 1}-1`).day();
            if (j === 0) {
                return 7;
            }
            else {
                return j;
            }
        },
        emptyStartDays() {
            const array = Array(this.leadingDays);
            const arrlength = array.length;
            return [...array].map((day, index) => {
                return {
                    date: dayjs(`${this.currentYear}-${this.currentMonth}-${this.lastDaysInMonth-(arrlength - index) + 1}`)
                }
            })
        },
        endingDays () {
            const daysInMonth = dayjs(`${this.currentYear}-${this.currentMonth + 1}-1`).daysInMonth();
            const j = dayjs(`${this.currentYear}-${this.currentMonth + 1}-${daysInMonth}`).day();

            if (j === 6) {
                return 7;
            }
            else {
                return 6-j;
            }
        },
        emptyEndDays() {
            const array = Array(this.endingDays);
            return [...array].map((day, index) => {
                return {
                    date: dayjs(`${this.currentYear}-${this.currentMonth+this.difference+2}-${index + 1}`)
                }
            })
        }
    }
}

</script>

<style scoped>
.calendar-month {
  position: relative;
  background-color: var(--grey-200);
  box-sizing: border-box;
  border: solid 1px var(--grey-300);
  display: inline-block;
}

.day-of-week,
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 100px);
}

.days-grid {
  position: relative;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  border-top: solid 1px var(--grey-200);
}


</style>