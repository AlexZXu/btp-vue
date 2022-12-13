<template>
    <div>
        <form>
            <div>
                Name:
                <input v-model="name" />
            </div>
            <div>
                <div>
                    City:
                    <input v-model="city" />
                </div>
                <div>
                    State:
                    <input v-model="state" />
                </div>            
            </div>
            <div>
                Zip: 
                <input v-model="zip" />
            </div>
            <div>
                Minimum Wage:
                <input v-model.number="minWage" />
            </div>
            <button type="submit" @click="handleNBH">{{ mode ? "Update Neighborhood" : "Create Neighborhood" }}</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "NBHNewForm",
        props: {
            mode: {
                type: Boolean,
            },
            target: {
                type: Number
            }
        },
        data() {
            return {
                name: '',
                city: '',
                state: '',
                zip: '',
                minWage: '',
                id: ''
            }
        },
        watch: {
            target(newTarget) {
                if (this.mode == true) {
                    this.fetchNBHItem(newTarget);
                }
                else {
                    this.name = '';
                    this.city = '';
                    this.state = '';
                    this.zip = '';
                    this.minWage = '';
                    this.id = '';
                }
            }
        },
        methods: {
            async handleNBH(e) {
                e.preventDefault();
                
                if (this.name && this.city && this.state && this.zip && this.minWage) {
                    if (this.mode == false) {
                        const res = await fetch("http://localhost:8888/api/Neighborhood/", {
                            method: 'POST',
                            headers: { 
                                'Accept': 'application/json',
                                'Content-Type': 'application/json' 
                            },
                            body: JSON.stringify({
                                neighborhoodName: this.name,
                                city: this.city,
                                state: this.state,
                                zip: this.zip,
                                minHourlyWage: parseFloat(this.minWage),
                                isMembershipFree: true,
                                addDate: "2022-09-22T00:00:00",
                                addUser: "from.code",
                                updateDate: null,
                                updateUser: null,
                                deleteDate: null,
                                deleteUser: null
                            })
                        })

                        this.$emit('sent')
                        return res.json();
                    } 
                    if (this.mode == true) {
                        const res = await fetch(`http://localhost:8888/api/Neighborhood/${this.id}`, {
                            method: 'PATCH',
                            headers: { 
                                'Accept': 'application/json',
                                'Content-Type': 'application/json' 
                            },
                            body: JSON.stringify({
                                neighborhoodName: this.name,
                                city: this.city,
                                state: this.state,
                                zip: this.zip,
                                minHourlyWage: parseFloat(this.minWage)
                            })
                        });
                        
                        this.$emit('sent')
                        return res.json();
                    }
                }
            },
            async fetchNBHItem(target) {
                const res = await fetch(`http://localhost:8888/api/Neighborhood/${target}`);
                
                const obj = await res.json();
                this.name = obj.neighborhoodName;
                this.city = obj.city;
                this.state = obj.state;
                this.zip = obj.zip;
                this.minWage = obj.minHourlyWage;
                this.id = obj.neighborhoodId;
            }
        },
        mounted () {
            if (this.mode){
                this.fetchNBHItem(this.target);
            }
        }

    }
</script>

<style scoped>

</style>