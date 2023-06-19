<template>
<img class="logo" src="../assets/rlogo.png" alt="logo" />
<h1>Login</h1>
<div class="login">
    <input type="email" v-model="email" placeholder="Enter Your Email">
    <input type="password" v-model="password" placeholder="Enter Your password">
    <button @click="login">Login</button>
    <p>
        <router-link to="/singup">New user singup here</router-link>
    </p>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UserLogin',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);

            if (result.status === 200 && result.data.length > 0) {
                alert("User logged in successfully")
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: "Home"});
            }

        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if (user)
            this.$router.push({name:"Home"})
        }
}
</script>
