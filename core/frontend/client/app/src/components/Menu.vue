<template>
  <div>
    <div class="menu-wrapper">
      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoutesLevels from '../clients/RoutesLevels';

@Component
export default class Menu extends Vue {  }
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
