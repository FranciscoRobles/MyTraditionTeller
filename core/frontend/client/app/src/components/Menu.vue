<template>
  <div>
    <div class="menu-wrapper">
      <router-link to="/activity">Activity</router-link>
       <button v-on:click="fetchAll()" >Fetch All</button>
       <button v-on:click="createLevel()" >Create Level</button>
       <button v-on:click="findLevel('2')" >Find Level</button>
       <button v-on:click="updateLevel('2')" >Update Level</button>
       <button v-on:click="deleteLevel('534')" >Delete Level</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoutesLevels from '../clients/RoutesLevels';

@Component
export default class Menu extends Vue { 
  routesLevels: RoutesLevels = new RoutesLevels()
  level: level = {

  }
  fetchAll(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.Levels()
        .then( results => {
          console.log(results):
        })
    })
  }

  createLevel(level: level){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.CreateLevel(this.level)
        .then( results => {
          console.log(results):
        })
    })
  }

  findLevel(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.FindLevel(id)
        .then( results => {
          console.log(results):
        })
    })
  }

  updateLevel(id: string, level: level){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.UpdateLevel(id, this.level)
        .then( results => {
          console.log(results):
        })
    })
  }

  deleteLevel(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.DeleteLevel(id)
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
