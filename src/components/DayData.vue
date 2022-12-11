<template>
<div>
    <h2>{{ this.monthday }}</h2>
    <h4>{{ this.year }}</h4>
    
    <CalendarEvent 
        v-for="events in recurringTimes"
        :key="events"
        :start="events.start"
        :end="events.end"
        :index="events.index"
    />  
</div>
</template>

<script>
import dayjs from 'dayjs';
import CalendarEvent from './CalendarEvent';
export default {
    name: "DayData",
    components: {
        CalendarEvent
    },
    props: {
        day: {
            type: Object
        },
    },
    data () {
        return {
            createNewRecurring: true,
            currstart: {hour: "0", minutes: "00"},
            currend: {hour: "0", minutes: "00"}
        }
    },
    computed: {
        getDay () {
            const day = dayjs(this.day).day();
            return day;
        },
        year() {
            const year = dayjs(this.day).year();
            return year;
        },
        monthday() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            const nummonth = dayjs(this.day).$M;
            const month = monthNames[nummonth];
            const day = dayjs(this.day).$D;

            return `${month} ${day}`;
        },

    },
}
</script>