<template>
    <ol class="day-of-week">
        <li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
    </ol>
</template>

<script>

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default {
    name: "ScheduleWeekdays",
    computed: {
        weekdays() {
            return WEEKDAYS;
        }
    },
}
</script>

<style scoped>
.day-of-week {
  display: grid;
  grid-template-columns: repeat(7, 50px);
}

.day-of-week > * {
  text-align: center;
  padding-right: 5px;
}

.day-of-week {
  color: var(--grey-800);
  font-size: 18px;
  background-color: #fff;
  padding-bottom: 5px;
  padding-top: 10px;
}
</style>