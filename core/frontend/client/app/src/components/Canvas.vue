<template>
  <div>
    <h1>Canvas</h1>
    <div class="canvas-wrapper">
      <canvas></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Canvas extends Vue {
  
}

</script>

<style scoped lang="scss">
.canvas-wrapper {
  margin: 10px;
  display: inline-block;
  background: white;
  border: 1px solid white;
  border-radius: 5px; 
  width: calc(100% - 20px);
  height: calc(100vh - 200px);
  canvas {
    width: calc(100% - 30px);
    margin: 10px 14px;
  }
}
</style>
