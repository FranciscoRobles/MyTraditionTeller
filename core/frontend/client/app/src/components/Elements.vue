<template>
  <div>
    <h1>Elements</h1>
    <div class="elements-wrapper">
      <img class="draggable" src="../../public/elements/elements01.png" alt="elements01">
      <img class="draggable" src="../../public/elements/elements02.png" alt="elements02">
      <img class="draggable" src="../../public/elements/elements03.png" alt="elements03">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Elements extends Vue {  }
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
