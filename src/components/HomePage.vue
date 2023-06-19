<template>
<router-view></router-view>
<AppHeader></AppHeader>
<h1>Hello {{name}}! Welcome on Home page.</h1>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
import AppHeader from './AppHeader.vue'
import axios from 'axios'
export default {
    name: 'HomePage',
    components: {
        AppHeader
    },
    data() {
        return {
            name: null,
            restaurants: []
        };
    },

    async mounted() {

        let result = await axios.get('http://localhost:3000/restaurants');
        this.restaurants=result.data

        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if (!user)
            this.$router.push({
                name: "SingUp"
            })
    }

}
</script>
<style>
td{
    width:180px;
    height: 35px;
    border:1px solid black;
}
table{
    margin-left: auto;
    margin-right: auto;
    border:1px solid black;
    border-collapse: collapse;

}
</style>
