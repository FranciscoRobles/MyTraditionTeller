<template>
  <div class="home">
    <Menu/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

@Component({
  components: {
    Menu,
  },
})
export default class Home extends Vue {}
</script>
