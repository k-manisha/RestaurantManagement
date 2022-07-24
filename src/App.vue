<template>
<div>
  <HeaderComponent/>
  <router-view />
</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
    },
    
}
</script>

<style>
body{
  margin:0;
  padding:0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 .logo {
        width: 100px;
    }
    .register input, .login input, .add input, .update input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin: auto;
        margin-bottom : 30px;
        border: 1px solid green
    }
    .register button, .login button, .add button, .update button {
        width: 320px;
        height: 40px;
        padding-left: 20px;
        cursor: pointer;
        
        color: white;
        background:  green ;
        border: 1px solid green 
    }
</style>
