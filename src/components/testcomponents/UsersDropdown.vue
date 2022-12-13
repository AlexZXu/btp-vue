<template>
<div>
<select name="users">
    
</select>
</div>
</template>

<style>

</style>

<script>
export default {
    name: 'UsersDropDown',
    data () {
        return {
            users: {}
        }
    },
    async mounted() {
        const res = await fetch("http://localhost:5176/api/ProviderSchedule/all");
        this.users = await res.json();
    }
}
</script>