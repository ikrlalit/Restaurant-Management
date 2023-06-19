<template>
<AppHeader></AppHeader>
<h2>Update Restaurant</h2>
<div class="register">
    <input type="text" v-model="restaurant.name" placeholder="Enter Restaurant Name">
    <input type="text" v-model="restaurant.address" placeholder="Restaurant Address">
    <input type="number" v-model="restaurant.contact" placeholder="Contacts">
    <button @click="update">Update Restaurant</button>
</div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import axios from 'axios'
export default {
    name: 'UpdateForm',
    components: {
        AppHeader
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: null
            }
        }
    },
    methods:{
       async update() {
        let result = await axios.put("http://localhost:3000/restaurants/"+ this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if (result.status===200){
                alert("Restauran Updated successfully")
            }

        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({
                name: 'SingUp'
            })
        }
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        console.log(result.data)
        this.restaurant = result.data

    }
}
</script>
