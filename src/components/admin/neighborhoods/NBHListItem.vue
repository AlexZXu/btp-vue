<template>
    <div @click="$emit('clickItem', this.Neighborhood.neighborhoodId)" class="container">
        <div>
            Name: {{ this.Neighborhood.neighborhoodName }}
        </div>
        <div>
            <div>
                City: {{ this.Neighborhood.city }}
            </div>
            <div>
                State: {{ this.Neighborhood.state }}
            </div>
            <div>
                Zip: {{ this.Neighborhood.zip }}
            </div>
        </div>
        <div>
            <div>
                Minimum Wage: {{ this.Neighborhood.minHourlyWage }}
            </div>
            <div>
                Membership Free: {{ this.Neighborhood.isMembershipFree }}
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "NBHListItem",
        props: {
            Neighborhood: {
                type: Object
            }
        }
    }
</script>

<style scoped>
.container {
    border: solid;
}
</style>