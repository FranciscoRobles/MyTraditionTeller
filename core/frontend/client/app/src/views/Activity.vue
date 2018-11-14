<template>
  <div class="activity">
    <div class="col-4">
      <Elements/>
    </div>
    <div class="col-5">
      <Canvas/>
    </div>
    <div class="col-3">
      <Story/>
    </div>
  </div>
</template>

<style lang="scss">
.activity {
  width: calc(100% - 10px);
  display: inline-flex;
  background: lightgray;
  padding: 5px;
  .col-3 {
    width: 20%;
  }
  .col-4 {
    width: 30%;
  }
  .col-5 {
    width: 50%;
  }
  .col-3, .col-4, .col-5 {
    div h1 {
      font-size: 30px;
      width: calc(100% - 10px);
      background: #f7931e;
      border-radius: 5px;
      padding: 10px 0;
      color: #fff;
      margin: 10px;
    }
  }
}

</style>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Elements from '@/components/Elements.vue';
import Canvas from '@/components/Canvas.vue';
import Story from '@/components/Story.vue';
import Save from '@/components/Save.vue';

@Component({
  components: {
    Elements,
    Canvas,
    Story,
    Save,
  },
})
export default class Activity extends Vue {

}

</script>