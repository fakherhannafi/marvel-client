<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options="option" ></line-chart>
  </div>
</template>

<script>
import LineChart from "../js/LineChart.js";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {
        mydatasets: [
          {
            label: "Nombre des Requêtes du jour",
            labels: [],
            data: [],
            borderColor: "#1E7FCB", //blue
            pointRadius: 0,
            fill: true
          },
          {
            label: "Nb Req J-1",
            labels: [],
            data: [],
            borderColor: "#000000", //black
            pointRadius: 0,
            fill: false
          }
        ]
      },

      option: {
        elements: {
          line: {
            tension: 0.05 // disables bezier curves
          }
        },
        scales: {
          yAxes: [
            {
              stacked: false
            }
          ],
          xAxes: [
            {
              /* type: "time",
              display: true,
              time: {
                unit: "hour",
                min: new Date("2018-08-03T00:00:00"),
                max: new Date("2018-08-03T23:59:59"),
                displayFormats: {
                  hour: "HH:mm"
                },
                tooltipFormat: "HH:mm"
              } */
            }
          ]
        },
        legend: {
          position: "bottom"
        },
        title: {
          display: true,
          position: "top",
          text: "PRISME Nombre des Requêtes"
        },
        layout: {
          /*    padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          } */
        },
        animation: {
          duration: 2000 // general animation time
        },
        hover: {
          animationDuration: 2000 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 2000
      }
    };
  },
  mounted() {
    /* this.fillData(); */
  },
  methods: {
    /*  fillData() {
      this.datacollection = {};
    }, */
  }
};
</script>

<style>
.small {
  max-inline-size: 300px;
  max-width: 400px;
  margin: 20px auto;
}
</style>