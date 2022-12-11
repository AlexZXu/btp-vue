<template>
<div @click="getScheduleEvent">
f
</div>
<div>
{{ schedule }}
</div>
</template>

<style>

</style>

<script>

export default {
    name: "ServicesContainer",
    data() {
        return {
            schedule: {}
        }
    },
    computed: {
        
    },
    methods: {
        async getScheduleEvent() {
            const res = await fetch("http://localhost:5176/api/ProviderSchedule/all");
            this.schedule = await res.json();
            console.log(this.schedule)
        }
    }

}
</script>