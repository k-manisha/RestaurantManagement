<template>
<div class="nav">
  <router-link to="/">Home</router-link>
   <router-link to="/add">Add Restaurant</router-link>
     <a href="#" @click="logout">Logout</a>
</div>
 
</template>

<script>
export default {
  name: "HeaderComponent",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name:'Login'});
    }
  }
};
</script>
<style>
.nav{
  background-color: #333;
  overflow: hidden;
}
.nav a{
  float:left;
  color: #fff;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  margin-right: 5px;
  text-decoration: none;
}
.nav a:hover{
  background-color: #fff;
  color: #333;
}
</style>
