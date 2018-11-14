<template>
  <div>
    <h1>Story</h1>
    <div class="story-wrapper">
      <input type="text">
        <div class="menu-wrapper">
          <router-link to="/activity">Activity</router-link>
            <button v-on:click="fetchAll()" >Fetch All</button>
            <button v-on:click="createStory()" >Create Story</button>
            <button v-on:click="findStory('5')" >Find Story</button>
            <button v-on:click="updateStory('5')" >Update Story</button>
            <button v-on:click="deleteStory('6')" >Delete Story</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoutesStories from '../clients/RoutesStories'

@Component
export default class Story extends Vue {
    routesStory: RoutesStories = new RoutesStories()
  story: story = {
    string: "papaya de celaya",
    nivel: "2"
  }
  fetchAll(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesStory.Stories()
        .then( results => {
          console.log(results);
        })
    })
  }
  createStory(story: story){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesStory.CreateStory(this.story)
        .then( results => {
          console.log(results);
        })
    })
  }
  findStory(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesStory.FindStory(id)
        .then( results => {
          console.log(results);
        })
    })
  }
  updateStory(id: string, story: story){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesStory.EditStories(id, this.story)
        .then( results => {
          console.log(results);
        })
    })
  }
  deleteStory(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesStory.DeleteStory(id)
        .then( results => {
          console.log(results);
        })
    })
  }
}

</script>

<style scoped lang="scss">
.story-wrapper {
  margin: 10px;
  display: inline-block;
  background: white;
  border: 1px solid white;
  border-radius: 5px; 
  width: calc(100% - 20px);
  height: calc(80vh - 200px);
  input {
    width: calc(100% - 30px);
    height: calc(100% - 28px);
    margin: 10px 14px;
    font-size: 14px;
	  top: -1px;
  }
}
</style>
