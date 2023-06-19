<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add_restaurant">Add Restaurant</router-link>
        <router-link to="/update_restaurant">Update Restaurant</router-link>
        <a @click="logout">Logout</a>
    </div>
</template>
<script>
export default{
    name:'AppHeader',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>
<style>
body{
    margin:0;
    padding:0;
}
.nav {
    background-color: rgb(9, 77, 77);
    padding: 10px;
    text-align: left;
}
.nav a{
    color: white;
    margin: 5px;
    text-decoration: none;
    font-size: 15px;
    padding: 10px 10px;
}
.nav a:hover{
    background-color: rgb(71, 144, 144);
    color:white;
}
</style>