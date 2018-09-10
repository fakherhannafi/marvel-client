<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options="option" ></line-chart>
  </div>
</template>

<script>
import LineChart from "../js/LineChart.js";
import WebcomService from "../services/webcom";
WebcomService.getNewNbRequest();
export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {},
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
              type: "time",
              display: true,
              time: {
                unit: "hour",
                min: new Date("2018-08-03T00:00:00"),
                max: new Date("2018-08-03T23:59:59"),
                displayFormats: {
                  hour: "HH:mm"
                },
                tooltipFormat: "HH:mm"
              }
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
    this.fillData();
    //WebcomService.getNewNbRequest();
  },
  methods: {
    fillData() {
      this.datacollection = {
        datasets: [
          {
            label: "Nombre des Requêtes du jour",
            borderColor: "#1E7FCB", //blue
            pointRadius: 0,
            fill: true,
            data: WebcomService.getNbRequestStaticMeasures()[0]
          },
          {
            label: "Nombre des Requêtes du J-1",
            borderColor: "#000000", //black
            pointRadius: 0,
            fill: false,
            data: WebcomService.getNbRequestStaticMeasures()[1]
          },
          {
            label: "Nombre des Requêtes du J-7",
            borderColor: "#008000", //green
            pointRadius: 0,
            fill: false,
            data: WebcomService.getNbRequestStaticMeasures()[2]
          },
          {
            label: "Nombre des Requêtes du J-28",
            borderColor: "#e50000", //red
            pointRadius: 0,
            fill: false,
            data: WebcomService.getNbRequestStaticMeasures()[3]
          }
        ]
      };
    }
  }
};
</script>

<style>
.small {
  width: 30%;
  margin: auto;
}
</style>