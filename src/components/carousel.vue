<template>
 <div>
     <NbRequestChart/>
 <carousel 
 :autoplay="true" 
 :perPage="1"
 :autoplayTimeout="10000">
  <slide>
  
  </slide>
  <slide>
  </slide>
    <slide>
  </slide>

</carousel>
 </div>
 
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import NbRequestChart from "./nbRequestChart.vue";
export default {
  components: {
    NbRequestChart,
    Carousel,
    Slide
  }
};
</script>

<style>
</style>
