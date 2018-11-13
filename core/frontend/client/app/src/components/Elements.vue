<template>
  <div>
    <h1>Elements</h1>
    <div class="elements-wrapper">
      <img class="draggable" src="../assets/elements/elements01.png" alt="elements01">
      <img class="draggable" src="../assets/elements/elements02.png" alt="elements02">
      <img class="draggable" src="../assets/elements/elements03.png" alt="elements03">
      <button v-on:click="fetchAll()" >Fetch all</button>
      <button v-on:click="fetchElement('2')" >Fetch one</button>
      <button v-on:click="createElement()" >Create one</button>
      <button v-on:click="editElement('2')" >Edit one</button>
      <button v-on:click="deleteElement('534')" >Delete one</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoutesElements from '../clients/RoutesElements';

@Component
export default class Elements extends Vue { 
  routesElements: RoutesElements = new RoutesElements();
  element: element = {
    nombre: "papaya",
    imagen: "../assets/elements/elements01.png",
    coordenadaX: "4",
    coordenadaY: "45",
  }


  fetchAll(){
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

  createElement(element: element){
  return new Promise<any>((resolved, rejected) =>{
    let promise = this.routesElements.CreateElement(this.element)
        .then( results => {
          console.log(results);
        })
    })
  }

  editElement(id: string, element: element){
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

}
</script>

<style scoped lang="scss">
.elements-wrapper {
  margin: 10px;
  display: inline-block;
  background: white;
  border: 1px solid white;
  border-radius: 5px;
  width: calc(100% - 20px);
  height: calc(100vh - 200px);
  img {
    width: calc(33% - 30px);
    height: auto;
    margin: 10px 14px;
  }
}

</style>
