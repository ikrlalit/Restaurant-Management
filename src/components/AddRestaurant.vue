<template>
   <AppHeader></AppHeader>
   <h2>Add Restaurant</h2>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Restaurant Name">
        <input type="text" v-model="address" placeholder="Restaurant Address">
        <input type="number" v-model="contact" placeholder="Contacts">
        <button @click="add">Add Restaurant</button>
    </div>
   
</template>
<script>
import AppHeader from './AppHeader.vue';
import axios from 'axios'
export default{
    name:"AddRestaurant",
    components:{
        AppHeader
    },
    data(){
        return{
            name:"",
            address:"",
            contact:null
            
        }
    },
    methods:{

        async add(){
            let result = await axios.post("http://localhost:3000/restaurants",{
                name:this.name,
                address:this.address,
                contact:this.contact
            });
            if (result.status===201){
                alert("Restaurant added successfully")
            }

        } 
    }
}
</script>
