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
          display: false
        },
        title: {
          display: true,
          position: "top",
          text: "PRISME Temps moyen d'initialisation"
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
            borderColor: "#1E7FCB", //blue
            pointRadius: 0,
            fill: true,
            data: [
              {
                x: new Date("2018-08-03T00:00:00"),
                y: 6.523
              },
              {
                x: new Date("2018-08-03T01:00:00"),
                y: 5.12
              },
              {
                x: new Date("2018-08-03T02:00:00"),
                y: 5.128
              },
              {
                x: new Date("2018-08-03T03:00:00"),
                y: 8.56
              },
              {
                x: new Date("2018-08-03T04:00:00"),
                y: 8.51
              },
              {
                x: new Date("2018-08-03T05:00:00"),
                y: 7.8
              },
              {
                x: new Date("2018-08-03T06:00:00"),
                y: 7
              },
              {
                x: new Date("2018-08-03T07:00:00"),
                y: 6.5
              },
              {
                x: new Date("2018-08-03T08:00:00"),
                y: 6.8
              },
              {
                x: new Date("2018-08-03T09:00:00"),
                y: 7.65
              },
              {
                x: new Date("2018-08-03T10:00:00"),
                y: 7.97
              },
              {
                x: new Date("2018-08-03T11:00:00"),
                y: 8.46
              },
              {
                x: new Date("2018-08-03T12:00:00"),
                y: 9.12
              },
              {
                x: new Date("2018-08-03T13:00:00"),
                y: 9.64
              },
              {
                x: new Date("2018-08-03T14:00:00"),
                y: 9.97
              },
              {
                x: new Date("2018-08-03T15:00:00"),
                y: 9.4
              },
              {
                x: new Date("2018-08-03T16:00:00"),
                y: 9.2
              },
              {
                x: new Date("2018-08-03T17:00:00"),
                y: 9.7
              },
              {
                x: new Date("2018-08-03T18:00:00"),
                y: 10.8
              },
              {
                x: new Date("2018-08-03T19:00:00"),
                y: 13.78
              },
              {
                x: new Date("2018-08-03T20:00:00"),
                y: 9.4
              },
              {
                x: new Date("2018-08-03T21:00:00"),
                y: 8.8
              },
              {
                x: new Date("2018-08-03T22:00:00"),
                y: 9.6
              },
              {
                x: new Date("2018-08-03T23:00:00"),
                y: 7.2
              },
              {
                x: new Date("2018-08-03T23:59:00"),
                y: 5.3
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
  width: 40%;

  margin: auto;
}
</style>