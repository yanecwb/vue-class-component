<template>
  <div>
    <div>123</div>
    <button @click="Superhandler">Superhandler</button>
    {{ num }}
    <button @click="() => (num = 3)">改变</button>
    <button @click="test">test</button>
    <p>{{ data }}</p>
  </div>
</template>

<script lang="ts">
import Super from "../utils/Super";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

// Extending the Super class component
@Component({
  props: {
    data: {
      type: Number,
      default: 0,
    },
    propC: {
      type: Array,
      default: () => {
        return ["a", "b"];
      },
      required: true,
      validator: (value) => {
        return ["a", "b"].indexOf(value as string) !== -1;
      },
    },
  },
})
export default class extends Super {
  created() {
    console.log(this.superValue); // -> Hello
  }
  Superhandler() {
    this.handler();
  }


  @Watch("num")
  handlerChanged(val: number, oldVal: number) {
    console.log(oldVal, val);
  }
  test = () => {
    this.num = 99;
  };
  num = 0;
  // console.log(this);
}
</script   >