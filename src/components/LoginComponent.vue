<template>
  <img class="logo" src="../assets/resto-logo.jpeg" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button" @click="login">Login</button>
  </div>
   <router-link to="/sign-up"> SignUp </router-link>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginComponent",
   data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
       if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({name: 'Home'})
      }
    },
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
       this.$router.push({name: 'Home'})
    }
  }
};
</script>
