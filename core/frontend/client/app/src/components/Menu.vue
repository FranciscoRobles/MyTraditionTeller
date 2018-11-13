<template>
  <div>
    <div class="menu-wrapper">
      <router-link to="/activity">Activity</router-link>
       <button v-on:click="fetchAll()" >Fetch All</button>
       <button v-on:click="createLevel()" >Create Level</button>
       <button v-on:click="findLevel()" >Find Level</button>
       <button v-on:click="updateLevel()" >Update Level</button>
       <button v-on:click="deleteLevel()" >Delete Level</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoutesLevels from '../clients/RoutesLevels';

@Component
export default class Menu extends Vue { 
  routesLevels: RoutesLevels = new RoutesLevels()
  fetchAll(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.Levels()
        .then( results => {
          console.log(results):
        })
    })
  }

  createLevel(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.Levels()
        .then( results => {
          console.log(results):
        })
    })
  }

  findLevel(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.Levels()
        .then( results => {
          console.log(results):
        })
    })
  }

  updateLevel(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.Levels()
        .then( results => {
          console.log(results):
        })
    })
  }

  deleteLevel(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.Levels()
        .then( results => {
          console.log(results):
        })
    })
  }
}
</script>

<style scoped lang="scss">
.menu-wrapper {
  margin: 10px;
  display: inline-block;
  background: white;
  border: 1px solid white;
  border-radius: 5px;
  width: calc(100% - 20px);
  height: calc(100vh - 200px);
}

</style>
