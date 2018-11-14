<template>
  <div>
    <h1>Story</h1>
    <div class="story-wrapper">
      <textarea type="text"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RoutesStories from '../clients/RoutesStories';

@Component
export default class Story extends Vue { }

</script>

<style scoped lang="scss">
.story-wrapper {
  margin: 10px;
  display: inline-block;
  background: white;
  border: 1px solid white;
  border-radius: 5px; 
  width: calc(100% - 20px);
  height: calc(80vh - 200px);
  textarea {
    width: calc(100% - 30px);
    height: calc(100% - 28px);
    margin: 10px 14px;
    font-size: 14px;
	  top: -1px;
  }
}
</style>
