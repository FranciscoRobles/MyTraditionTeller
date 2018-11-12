<template>
  <div>
    <div class="story-wrapper">
      <button>Guardar</button>
      <button>Descargar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Save extends Vue {
  
}

</script>

<style scoped lang="scss">
.save-wrapper {
  margin: 10px;
  display: inline-block;
  background: white;
  border: 1px solid white;
  border-radius: 5px; 
  width: calc(100% - 20px);
  height: calc(20vh - 200px);
  button {
    width: calc(100% - 30px);
    margin: 10px 14px;
  }
}
</style>
