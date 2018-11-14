<template>
  <div>
    <div class="save-wrapper">
      <button id="save">Guardar</button>
      <button id="download" >Descargar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Save extends Vue { }

</script>

<style scoped lang="scss">
.save-wrapper {
  margin: 10px;
  display: inline-block;
  border-radius: 5px; 
  width: calc(100% - 20px);
  height: calc(20vh - 200px);
  button {
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    margin: 10px 0;
    &#save {
      background: #0071bc;
    }
    &#download {
      background: #39b54a;
    }
  }
}
</style>
