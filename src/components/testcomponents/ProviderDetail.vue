<template>
    <div>
        {{ provider.firstName }} {{provider.lastName}}
    </div>
    <CalendarContainer />
</template>


<script>
import CalendarContainer from './CalendarContainer.vue';
export default {
    name: "ProviderDetail",
    components: {
        CalendarContainer
    },
    props: {
        provider: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            providerData: {},
            scheduleData: [
                {
                    scheduleBeginDate: "2022-09-22T13:00:00",
                    scheduleEndDate: "2022-09-22T15:00:00"
                }, 
                {
                    scheduleBeginDate: "2022-09-25T14:00:00",
                    scheduleEndDate: "2022-09-25T17:00:00"
                }
            ]
        }
    },
    methods: {

    }
}

</script>

<style>

</style>