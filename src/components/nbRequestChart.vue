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
      datacollection: null,
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
            data: [
              {
                x: new Date("2018-08-03T00:00:00"),
                y: 50
              },
              {
                x: new Date("2018-08-03T01:00:00"),
                y: 50
              },
              {
                x: new Date("2018-08-03T02:00:00"),
                y: 50
              },
              {
                x: new Date("2018-08-03T03:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T04:00:00"),
                y: 50
              },
              {
                x: new Date("2018-08-03T05:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T06:00:00"),
                y: 50
              },
              {
                x: new Date("2018-08-03T07:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T08:00:00"),
                y: 50
              },
              {
                x: new Date("2018-08-03T09:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T10:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T11:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T12:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T13:00:00"),
                y: 180
              },
              {
                x: new Date("2018-08-03T14:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T15:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T16:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T17:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T18:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T19:00:00"),
                y: 170
              },
              {
                x: new Date("2018-08-03T20:00:00"),
                y: 180
              },
              {
                x: new Date("2018-08-03T21:00:00"),
                y: 170
              },
              {
                x: new Date("2018-08-03T22:00:00"),
                y: 180
              },
              {
                x: new Date("2018-08-03T23:00:00"),
                y: 180
              },
              {
                x: new Date("2018-08-03T23:59:00"),
                y: 180
              }
            ]
          },
          {
            label: "Nombre des Requêtes du J-1",
            borderColor: "#000000", //black
            pointRadius: 0,
            fill: false,
            data: [
              {
                x: new Date("2018-08-03T00:00:00"),
                y: 30
              },
              {
                x: new Date("2018-08-03T01:00:00"),
                y: 40
              },
              {
                x: new Date("2018-08-03T02:00:00"),
                y: 90
              },
              {
                x: new Date("2018-08-03T03:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T04:00:00"),
                y: 40
              },
              {
                x: new Date("2018-08-03T05:00:00"),
                y: 30
              },
              {
                x: new Date("2018-08-03T06:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T07:00:00"),
                y: 68
              },
              {
                x: new Date("2018-08-03T08:00:00"),
                y: 57
              },
              {
                x: new Date("2018-08-03T09:00:00"),
                y: 65
              },
              {
                x: new Date("2018-08-03T10:00:00"),
                y: 86
              },
              {
                x: new Date("2018-08-03T11:00:00"),
                y: 67
              },
              {
                x: new Date("2018-08-03T12:00:00"),
                y: 88
              },
              {
                x: new Date("2018-08-03T13:00:00"),
                y: 170
              },
              {
                x: new Date("2018-08-03T14:00:00"),
                y: 160
              },
              {
                x: new Date("2018-08-03T15:00:00"),
                y: 140
              },
              {
                x: new Date("2018-08-03T16:00:00"),
                y: 180
              },
              {
                x: new Date("2018-08-03T17:00:00"),
                y: 220
              },
              {
                x: new Date("2018-08-03T18:00:00"),
                y: 250
              },
              {
                x: new Date("2018-08-03T19:00:00"),
                y: 180
              },
              {
                x: new Date("2018-08-03T20:00:00"),
                y: 140
              },
              {
                x: new Date("2018-08-03T21:00:00"),
                y: 160
              },
              {
                x: new Date("2018-08-03T22:00:00"),
                y: 150
              },
              {
                x: new Date("2018-08-03T23:00:00"),
                y: 100
              },
              {
                x: new Date("2018-08-03T23:59:00"),
                y: 80
              }
            ]
          },
          {
            label: "Nombre des Requêtes du J-7",
            borderColor: "#008000", //green
            pointRadius: 0,
            fill: false,
            data: [
              {
                x: new Date("2018-08-03T00:00:00"),
                y: 38
              },
              {
                x: new Date("2018-08-03T01:00:00"),
                y: 57
              },
              {
                x: new Date("2018-08-03T02:00:00"),
                y: 67
              },
              {
                x: new Date("2018-08-03T03:00:00"),
                y: 65
              },
              {
                x: new Date("2018-08-03T04:00:00"),
                y: 58
              },
              {
                x: new Date("2018-08-03T05:00:00"),
                y: 67
              },
              {
                x: new Date("2018-08-03T06:00:00"),
                y: 59
              },
              {
                x: new Date("2018-08-03T07:00:00"),
                y: 67
              },
              {
                x: new Date("2018-08-03T08:00:00"),
                y: 58
              },
              {
                x: new Date("2018-08-03T09:00:00"),
                y: 66
              },
              {
                x: new Date("2018-08-03T10:00:00"),
                y: 75
              },
              {
                x: new Date("2018-08-03T11:00:00"),
                y: 40
              },
              {
                x: new Date("2018-08-03T12:00:00"),
                y: 90
              },
              {
                x: new Date("2018-08-03T13:00:00"),
                y: 110
              },
              {
                x: new Date("2018-08-03T14:00:00"),
                y: 100
              },
              {
                x: new Date("2018-08-03T15:00:00"),
                y: 120
              },
              {
                x: new Date("2018-08-03T16:00:00"),
                y: 85
              },
              {
                x: new Date("2018-08-03T17:00:00"),
                y: 95
              },
              {
                x: new Date("2018-08-03T18:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T19:00:00"),
                y: 90
              },
              {
                x: new Date("2018-08-03T20:00:00"),
                y: 110
              },
              {
                x: new Date("2018-08-03T21:00:00"),
                y: 120
              },
              {
                x: new Date("2018-08-03T22:00:00"),
                y: 130
              },
              {
                x: new Date("2018-08-03T23:00:00"),
                y: 140
              },
              {
                x: new Date("2018-08-03T23:59:00"),
                y: 150
              }
            ]
          },
          {
            label: "Nombre des Requêtes du J-28",
            borderColor: "#e50000", //red
            pointRadius: 0,
            fill: false,
            data: [
              {
                x: new Date("2018-08-03T00:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T01:00:00"),
                y: 70
              },
              {
                x: new Date("2018-08-03T02:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T03:00:00"),
                y: 90
              },
              {
                x: new Date("2018-08-03T04:00:00"),
                y: 60
              },
              {
                x: new Date("2018-08-03T05:00:00"),
                y: 70
              },
              {
                x: new Date("2018-08-03T06:00:00"),
                y: 55
              },
              {
                x: new Date("2018-08-03T07:00:00"),
                y: 66
              },
              {
                x: new Date("2018-08-03T08:00:00"),
                y: 54
              },
              {
                x: new Date("2018-08-03T09:00:00"),
                y: 64
              },
              {
                x: new Date("2018-08-03T10:00:00"),
                y: 84
              },
              {
                x: new Date("2018-08-03T11:00:00"),
                y: 80
              },
              {
                x: new Date("2018-08-03T12:00:00"),
                y: 70
              },
              {
                x: new Date("2018-08-03T13:00:00"),
                y: 150
              },
              {
                x: new Date("2018-08-03T14:00:00"),
                y: 150
              },
              {
                x: new Date("2018-08-03T15:00:00"),
                y: 130
              },
              {
                x: new Date("2018-08-03T16:00:00"),
                y: 120
              },
              {
                x: new Date("2018-08-03T17:00:00"),
                y: 110
              },
              {
                x: new Date("2018-08-03T18:00:00"),
                y: 120
              },
              {
                x: new Date("2018-08-03T19:00:00"),
                y: 130
              },
              {
                x: new Date("2018-08-03T20:00:00"),
                y: 100
              },
              {
                x: new Date("2018-08-03T21:00:00"),
                y: 90
              },
              {
                x: new Date("2018-08-03T22:00:00"),
                y: 150
              },
              {
                x: new Date("2018-08-03T23:00:00"),
                y: 160
              },
              {
                x: new Date("2018-08-03T23:59:00"),
                y: 120
              }
            ]
          }
        ]
      };
    },
    addData() {
      return 0;
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