<template>
<div>
   <h1>Add a new restaurant</h1>
  <div class="add">
    <input type="text" v-model="restaurant.name" placeholder="Enter Name" />
    <input type="text" v-model="restaurant.address" placeholder="Enter Address" />
    <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" />
    <button type="button" @click="add">Add</button>
  </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "AddComponent",
  data(){
    return {
      restaurant:{
        name:'',
        address:'',
        contact:''
      }
    }
  },
  methods:{
    async add(){
      let result = await axios.post('http://localhost:3000/restaurants',{
         name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      });
      if(result.status==201){
        console.log({result});
        this.$router.push({name:'Home'});
      }
    }
  },
  mounted(){

  }

};
</script>
