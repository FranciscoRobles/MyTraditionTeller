import { Component, Vue } from 'vue-property-decorator';
import HelloComponent from '@/components/hello/hello'; // @ is an alias to /src

@Component({
  components: {
    HelloComponent,
  },
})
export default class Home extends Vue {}
