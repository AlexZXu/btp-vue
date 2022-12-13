<template>
    <div>
        <NBHListItem v-for="neighborhood in neighborhoods" :Neighborhood="neighborhood" :key="neighborhood.neighborhoodId" @clickItem="push"/>
    </div>
</template>

<script>
import NBHListItem from './NBHListItem.vue';
export default {
    name: "NBHList",
    components: {
        NBHListItem
    },
    props: {
        trigger: {
            type: Boolean
        }
    },
    watch: { 
        trigger: function() {
            this.fetchNeighborhoods()
        }
    },
    data () {
        return {
            neighborhoods: {}
        }
    },
    methods: {
        async fetchNeighborhoods() {
            const res = await fetch("http://localhost:8888/api/Neighborhood/all")
            this.neighborhoods = await res.json();
        },
        push(n) {
            this.$emit('clickItem', n);
        }
    },
    mounted () {
        this.fetchNeighborhoods()
    }
}
</script>

<style scoped>

</style>