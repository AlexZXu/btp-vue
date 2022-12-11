<template>
<div class="criteria-buttons">
    <button @click="fetchByCategory(1)">Babysitting</button>
    <button @click="() => {fetchByCategory(2)}">Tutoring</button>
    <button @click="() => {fetchByCategory(3)}">Petsitting</button>   
</div>
<div class="criteria-buttons">
    <button>1</button>
    <button>2</button>
    <button>3</button>
</div>
<div class="providers-list">
    <ProviderOption v-for="provider in providers" :key="provider" :provider="provider"/>
</div>
</template>

<script>
import ProviderOption from './ProviderOption.vue';

export default {
    name: "SchedulesMain",
    components: {
        ProviderOption
    },
    data() {
        return {
            providerCategoryId: 0,
            providers: []
        }
    },
    methods: {
        async fetchByCategory(id) {
            this.providerCategoryId = id;
            const res = await fetch(`http://localhost:8888/api/ProviderSchedule/category/${id}`);
            let providers = await res.json();

            this.providers = providers;
        }
    }
}
</script>
<style>
.criteria-buttons {
    display: flex;

}
</style>