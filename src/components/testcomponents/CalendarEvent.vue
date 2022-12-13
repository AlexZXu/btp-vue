<template>
<div>
    <span>{{ this.start.hour }}:{{ this.start.minutes }}</span> -
    <span>{{ this.end.hour }}:{{this.end.minutes}}</span>
</div>
</template>

<script>

export default {
    name: "CalendarEvent", 
    props: {
        start: {
            type: Object
        },
        end: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    methods: {
    }
}
</script>