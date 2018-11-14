<template>
  <div>
    <div class="menu-wrapper">
        <div class="level">
            <h1>Levels</h1>
            <p>Here you can test all the connections and functionalities for the Levels.</p>
            <br>
            <a target="_blank" href="https://github.com/FranciscoRobles/MyTraditionTeller">View Documentation</a>
            <br>
            <button v-on:click="fetchAllLevels()" >Fetch All Levels</button>
            <button v-on:click="createLevel()" >Create Level</button>
            <button v-on:click="findLevel('2')" >Find Level</button>
            <button v-on:click="updateLevel('2')" >Update Level</button>
            <button v-on:click="deleteLevel('534')" >Delete Level</button>
        </div>
        <div class="element">
            <h1>Element</h1>
            <p>Here you can test all the connections and functionalities for the Elements.</p>
            <br>
            <a target="_blank" href="https://github.com/FranciscoRobles/MyTraditionTeller">View Documentation</a>
            <br>
            <button v-on:click="fetchAllElements()" >Fetch all Elements</button>
            <button v-on:click="fetchElement('2')" >Fetch Element</button>
            <button v-on:click="createElement()" >Create Element</button>
            <button v-on:click="editElement('2')" >Edit Element</button>
            <button v-on:click="deleteElement('534')" >Delete Element</button>
        </div>
        <div class="story">
            <h1>Story</h1>
            <p>Here you can test all the connections and functionalities for the Stories.</p>
            <br>
            <a target="_blank" href="https://github.com/FranciscoRobles/MyTraditionTeller">View Documentation</a>
            <br>
            <button v-on:click="fetchAllStories()" >Fetch All Stories</button>
            <button v-on:click="createStory()" >Create Story</button>
            <button v-on:click="findStory('1')" >Find Story</button>
            <button v-on:click="updateStory('1')" >Update Story</button>
            <button v-on:click="Story('69')" >Delete Story</button>
        </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoutesLevels from '../clients/RoutesLevels';
import RoutesElements from '../clients/RoutesElements';
import RoutesStories from '../clients/RoutesStories';

@Component
export default class ConnectApi extends Vue { 
  routesLevels: RoutesLevels = new RoutesLevels();
  routesElements: RoutesElements = new RoutesElements();
  routesStory: RoutesStories = new RoutesStories()

  level: any = { 
    id: "1",
    historia: "blabla"
  }
  element: any = {
    id: "1",
    nombre: "papaya",
    imagen: "../assets/elements/elements01.png",
    coordenadaX: "4",
    coordenadaY: "45",
  }
  story: any = {
    id: "1",
    string: "Papaya",
    nivel: "2"
   }


  // Level 
  fetchAllLevels(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.Levels()
        .then( results => {
          console.log(results);
        })
    })
  }

  createLevel(level: any){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.CreateLevel(this.level)
        .then( results => {
          console.log(results);
        })
    })
  }

  findLevel(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.FindLevel(id)
        .then( results => {
          console.log(results);
        })
    })
  }

  updateLevel(id: string, level: any){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.UpdateLevel(id, this.level)
        .then( results => {
          console.log(results);
        })
    })
  }

  deleteLevel(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesLevels.DeleteLevel(id)
        .then( results => {
          console.log(results);
        })
    })
  }


  // Element

  fetchAllElements(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesElements.Elements()
        .then( results => {
          console.log(results);
        })


    })
  }

  fetchElement(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesElements.FindElement(id)
        .then( results => {
          console.log(results);
        })
    })
  }

  createElement(element: any){
  return new Promise<any>((resolved, rejected) =>{
    let promise = this.routesElements.CreateElement(this.element)
        .then( results => {
          console.log(results);
        })
    })
  }

  editElement(id: string, element: any){
  return new Promise<any>((resolved, rejected) =>{
    let promise = this.routesElements.EditElement(id, this.element)
        .then( results => {
          console.log(results);
        })
    })
  }

  deleteElement(id: string){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesElements.DeleteElement(id)
        .then( results => {
          console.log(results);
        })
    })
  }

  // Story
  fetchAllStories(){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesStory.Stories()
        .then( results => {
          console.log(results);
        })
    })
  }
  createStory(story: any){
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
  updateStory(id: string, story: any){
    return new Promise<any>((resolved, rejected) =>{
      let promise = this.routesStory.UpdateStory(id, this.story)
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
.menu-wrapper {
  margin: 10px;
  display: inline-block;
  border-radius: 5px;
  width: 100%;
  height: calc(100vh - 200px);
  .level, .element, .story {
      text-align: left;
      width: calc(25% - 50px);
      margin: 25px;
      border-radius: 5px;
      background: white;
      padding: 30px 50px;
      background: white;
      border: 1px solid white;
      display: inline-block;
      a {
        font-weight: 600;
        text-decoration: none;
      }
  }
}
</style>
