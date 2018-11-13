<template>
  <div>
    <h1>Canvas</h1>
    <div class="canvas-wrapper">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>
<script type="application/javascript">
  console.log("Holi");
  $('canvas')
    .drawArc({
      layer: true,
      draggable: true,
      fillStyle: '#36c',
      x: 150, y: 150,
      radius: 50
    })
    .drawRect({
      layer: true,
      draggable: true,
      fillStyle: '#6c1',
      x: 100, y: 100,
      width: 100, height: 100
    });
</script>



<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Canvas extends Vue {}
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
