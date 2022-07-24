<template>
<div>
   <h1>Hello {{userName}}, Welcome to Home Page</h1>
  <table border="1" v-if="restaurants && restaurants.length >0">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{item.id}}</td>
       <td>{{item.name}}</td>
       <td>{{item.address}}</td>
       <td>{{item.contact}}</td>
       <td><router-link :to="'/update/'+item.id">Update</router-link>
        <button class="delete" title="Delete" type="button" @click="deletRestaurant(item.id)">X</button></td>
    </tr>
  </table>
    
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeComponent",
  data(){
    return {
      userName: '',
      restaurants:[]
      }
  },
 
  methods: {
    async deletRestaurant(id) {
      let result = await axios.delete(`http://localhost:3000/restaurants/${id}`);
      if (result.status == 200) {
       this.loadData();
      }
    },
    async loadData(){
       let user = localStorage.getItem('user-info');
    this.userName= JSON.parse(user).name;
    if(!user){
       this.$router.push({name: 'SignUp'})
    }
    let result =  await axios.get(`http://localhost:3000/restaurants`);
    this.restaurants = result.data;
    }
  },
  async mounted(){
   this.loadData();
  }
};
</script>
<style scoped>
td{
  width: 160px;
  height:40px;
}
.delete {
  color:red;
  margin-left: 5px;
  padding: 5px;
  background: white;
  border: 1px solid green;

}
</style>
