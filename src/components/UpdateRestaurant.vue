<template>
<AppHeader></AppHeader>
<div class="tableblock">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.contact}}</td>
                <td>
                    <router-link :to="'/update/'+item.id">Update</router-link> | <button @click="deleterestro(item.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import axios from 'axios'
export default {
    name: "UpdateRestaurant",
    components: {
        AppHeader
    },
    data() {
        return {
            restaurants: []
        };
    },
    methods: {
        async deleterestro(id) {
            let result=await axios.delete("http://localhost:3000/restaurants/" + id);
            if(result.status==200)
            {
                this.refreshdata();
            }


        },
        async refreshdata() {
            let result = await axios.get('http://localhost:3000/restaurants');
            this.restaurants = result.data
            let user = localStorage.getItem('user-info');
            if (!user)
                this.$router.push({
                    name: "SingUp"
                })

        }

    },

    async mounted() {

        let result = await axios.get('http://localhost:3000/restaurants');
        this.restaurants = result.data
        let user = localStorage.getItem('user-info');
        if (!user)
            this.$router.push({
                name: "SingUp"
            })
    }

}
</script>

<style>
td {
    width: 180px;
    height: 35px;
    border: 1px solid black;
}

table {
    margin-top: auto;
    border: 1px solid black;
    border-collapse: collapse;
}

.tableblock {
    margin-top: 15px;
}

th {
    height: 35px;
}
</style>
