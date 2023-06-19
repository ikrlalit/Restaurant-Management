<template>
      <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.logo{
    width: 125px;
}
.register input, .login input {
    width: 300px;
    height: 40px;
    padding-left: 10px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button, .login button {
    width: 320px;
    color: #fff;
    height: 40px;
    background-color: skyblue;
    cursor: pointer;}
</style>
