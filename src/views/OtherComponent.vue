<template>
    <div>
        OtherComponent 
        {{data}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class extends Vue{
 data = 5
}
</script>