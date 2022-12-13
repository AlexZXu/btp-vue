<template>
    <div>
        <NBHList @clickItem="updateTarget" :trigger="trigger"/>
    </div>
    <button @click="() => flip(!this.open)">
        {{ this.open ? 'Close' : 'New Community' }}
    </button>
    <NBHNewForm v-if="open" :mode="mode" :target="target" @sent="() => {flip(false); trigger = !trigger}" />
</template>

<script>
import NBHList from '@/components/admin/neighborhoods/NBHList.vue';
import NBHNewForm from '@/components/admin/neighborhoods/NBHNewForm.vue';
export default {
    name: "AdminNeighborhoods",
    components: {
        NBHList,
        NBHNewForm
    },
    data() {
        return {
            open: false,
            mode: false,
            target: -1,
            trigger: false
        }
    },
    methods: {
        updateTarget(n) {
            this.flip(true)
            this.mode = true;
            this.target = n;
        },
        flip(type) {
            this.open = type;
            
            if (this.open == false) {
                this.mode = false;
                this.target = -1;
            }
        }
    }
}
</script>

<style>

</style>