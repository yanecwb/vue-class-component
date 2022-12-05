<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{name}}</p>
    <br>
    <button @click="add">改</button>
    <button @click="jj">-jj</button>
    <OtherComponent/>

    <br/>
    <br/>
    <br/>
    <button @click="hello(2)">自定义修饰器</button>
    <br>
    <br>
    <br>
    <te :data=132></te>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// 组件
import OtherComponent  from './OtherComponent.vue'
import te from './te.vue'

// 自定义修饰器
import { Log } from '../utils/createDecorator'

interface Persen {
  name:string;
  age:number | string
}
let jerry : Persen = {
  name:'eqw',
  age:15
}
console.log(jerry);

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave'
])

interface Fgf {
  fullPath:string;
  hash:string;
  matched:object[];
  meta:object
}

// HelloWorld class will be a Vue component
@Component({
  components:{
    OtherComponent,
    te
  }
})
export default class extends Vue {
  message = 'Hello World!'
  count =  2;
  firstName = 'John'
  lastName:string | number = 'Doe'
  get FullName() {
    return this.firstName + ' ' + this.lastName
  }
  set FullName(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
  add(){
    this.lastName = 123
  }
  jj(){
    // this.count--
  }
  beforeDestroy(){
    console.log('destroy');
  }
  beforeCreate(){
    console.log('beforeCreate');
  }
  beforeUpdate(){
    console.log('beforeUpdate');
  }
  mounted() {
    console.log('mounted')
  }

  // render() {
  //   return <div>Hello World!</div>
  // }


  beforeRouteLeave(to:Fgf, from:Fgf, next:any) {
    console.log(to,from,next,'beforeRouteUpdate')
    next()
  }


  @Log
  hello(value:number):void {
    console.log(value);
    
  }
}
</script>
