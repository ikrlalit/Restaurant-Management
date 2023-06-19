<template>
    <img class="logo" src="../assets/rlogo.png" alt="logo">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Your Name">
        <input type="email" v-model="email" placeholder="Enter Your Email">
        <input type="password" v-model="password" placeholder="Create a password">
        <button @click="signup">SignUp</button>
        <p>
            <router-link to="/login">Login</router-link>

        </p>

    </div>
</template>
<script>
// import router from '@/routes';
import axios from 'axios'
export default{
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup(){
            let result = await axios.post('http://localhost:3000/users',{
                name:this.name,
                email:this.email,
                password:this.password
            });
            if (result.status===201){
                alert("User created successfully")
            }
            localStorage.setItem("user-info",JSON.stringify(result.data))    
            this.$router.push({name:"Home"})
        }

    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if (user)
            this.$router.push({name:"Home"})
        }

    }
</script>
<style>

</style>