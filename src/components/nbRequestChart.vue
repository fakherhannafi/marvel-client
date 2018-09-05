<template>
    <vue-chart type="line" :data="chartData"></vue-chart>
</template>

<script>
import VueChart from 'vue-chartjs'

export default {
  name: 'App',

  components: {
    VueChart
  },

  data: () => ({
    chartData: {
        labels: ['Item 1', 'Item 2', 'Item 3'],
        datasets: [
            {
                label: 'Component 1',
                data: [10, 20, 30]
            },
            {
                label: 'Component 2',
                data: [20, 30, 40]
            }
        ]
    }
  }),
}
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>