<template>
 <div>
 <carousel 
 :autoplay="true"
 :slideSpeed="2000"
 :autoplayTimeout="5000"
 :minSwipeDistance="50"
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
