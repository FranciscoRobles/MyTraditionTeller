<template>
  <div class="admin">
    <div class="admin-wrapper">
      <ConnectApi/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ConnectApi from '@/components/ConnectApi.vue'; // @ is an alias to /src

@Component({
  components: {
    ConnectApi,
  },
})
export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>
  .admin {
    width: calc(100% - 65px);
    height: 100%;
    margin: 15px;
    padding: 15px;
    background: lightgray;
    .admin-wrapper {
      text-align: left;
      width: 100%;
      margin: auto;
    }
  }
</style>