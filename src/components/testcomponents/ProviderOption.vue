<template>
<div>
    <div>
        {{ providerData.firstName }} {{providerData.lastName }}
    </div>
    <div>
        Contacts:
    </div>
    <div>
        <div>Email: {{ providerData.email }}</div>
        <div>Phone: {{ providerData.mobilePhone }}</div>
    </div>
    <ProviderDetail :provider="this.providerData" />
</div>
</template>

<script>
import ProviderDetail from './ProviderDetail.vue';

export default {
    name: "ProviderOption",
    components: {
        ProviderDetail
    },
    props: {
        provider: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            providerData: {}
        }
    },
    methods: {
        async fetchProvider() {
            const res = await fetch(`http://localhost:8888/api/Provider/${this.provider.providerId}`);
            this.providerData = await res.json();
        }
    },
    mounted() {
        this.fetchProvider()
    }
}


</script>

<style>

</style>