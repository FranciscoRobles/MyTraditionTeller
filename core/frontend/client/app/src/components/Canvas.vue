<template>
  <div>
    <h1>Canvas</h1>
    <div class="canvas-wrapper">
      <iframe src="./mycanvas.html" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import JQuery from 'jquery';
import JCanvas from 'jcanvas';

@Component
export default class Canvas extends Vue { }

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
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
