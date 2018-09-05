<template>
 
 <carousel :autoplay="true" :perPage="1">
  <slide>
    Slide 1 Content
  </slide>
  <slide>
    Slide 2 Content
  </slide>
    <slide>
    Slide 3 Content
  </slide>
</carousel>

 
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import NbRequestChart from './nbRequestChart.vue'
export default {
 
   components: {
    NbRequestChart,
    Carousel,
    Slide
  }
}
</script>

<style>
</style>
