import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    @Prop() private app!: string;
}
