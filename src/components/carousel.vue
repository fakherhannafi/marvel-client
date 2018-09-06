<template>
 <div>
 <carousel 

 :autoplayLoop="true"
 :autoplayTimeout="1000"
 :perPage="1">
  <slide>
  <NbRequestChart/>
  </slide>
  <slide>
    <TimeToInitChart/> 
  </slide>
    <slide>
    <NbErrorChart/>
  </slide>

</carousel>
 </div>
 
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import NbRequestChart from "./nbRequestChart.vue";
import TimeToInitChart from "./timeToInitChart.vue";
import NbErrorChart from "./nbErrorChart.vue";
export default {
  components: {
    NbRequestChart,
    TimeToInitChart,
    NbErrorChart,
    Carousel,
    Slide
  }
};
</script>

<style>
</style>
