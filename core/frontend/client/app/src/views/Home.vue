<template>
  <div class="home">
    <div class="about">
    <div class="about-wrapper">
      <h1>Welcome to MyStoryteller!</h1>
      <p>Most of the times, children do not have safe workspaces or environments to explore the basic functionalities 
        from computers. This happens either because parents do not trust or allow their kids to user their own devices,
        due to fear they might break them.</p>
      <p>This where MyTraditionTeller comes in! We have to main objectives:</p>
      <ul>
        <li>Develop mechanic abilities for basic computer interaction, such as drag n’ drop, or general usage of keyboard and mouse.</li><br>
        <li>Learn about our traditions by playing with activities related to a specific tradition from our country or region, in family or alone.</li>
      </ul>
      <br>
      <a target="_blank" href="https://github.com/FranciscoRobles/MyTraditionTeller">View Documentation</a>
    </div>
  </div>
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

<style lang="scss" scoped>
  .about {
    width: calc(100% - 65px);
    height: calc(100vh - 100px);
    margin: 15px;
    padding: 15px;
    background: lightgray;
    .about-wrapper {
      text-align: left;
      width: calc(40% - 50px);
      margin: 25px;
      border-radius: 5px;
      background: white;
      padding: 30px 50px;
      a {
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
</style>