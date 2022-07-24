<template>
<div>
   <h1>Update the restaurant</h1>
  <div class="update">
    <input type="text" v-model="restaurant.name" placeholder="Enter Name" />
    <input type="text" v-model="restaurant.address" placeholder="Enter Address" />
    <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" />
    <button type="button" @click="update">Update</button>
  </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateComponent",
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
    async update(){
      const id= this.$route.params.id;
      let result = await axios.put(`http://localhost:3000/restaurants/${id}`,{
         name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      });
      if(result.status==200){
        console.log({result});
        this.$router.push({name:'Home'});
      }
    }
  },
 async mounted(){
      let user = localStorage.getItem('user-info');
    if(!user){
       this.$router.push({name: 'SignUp'})
    }
      const id= this.$route.params.id;
       let restaurantInfo = await axios.get(`http://localhost:3000/restaurants/${id}`);
       this.restaurant=restaurantInfo.data;

  }
};
</script>
