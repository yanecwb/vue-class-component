import Vue from 'vue'
import Component from 'vue-class-component'

// Define a super class component
@Component
export default class Super extends Vue {
  superValue = 'Hello'
  handler(){
    console.log(12321);
    
  }
}