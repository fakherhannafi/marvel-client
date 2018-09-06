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
          text: "PRISME Nombre Reféré par code de retour"
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
            borderColor: "#1E7AAA", //blue
            pointRadius: 0,
            fill: true,
            data: [
              {
                x: new Date("2018-08-03T00:00:00"),
                y: 25
              },
              {
                x: new Date("2018-08-03T01:00:00"),
                y: 26
              },
              {
                x: new Date("2018-08-03T02:00:00"),
                y: 29
              },
              {
                x: new Date("2018-08-03T03:00:00"),
                y: 25
              },
              {
                x: new Date("2018-08-03T04:00:00"),
                y: 24
              },
              {
                x: new Date("2018-08-03T05:00:00"),
                y: 24
              },
              {
                x: new Date("2018-08-03T06:00:00"),
                y: 20
              },
              {
                x: new Date("2018-08-03T07:00:00"),
                y: 25
              },
              {
                x: new Date("2018-08-03T08:00:00"),
                y: 17
              },
              {
                x: new Date("2018-08-03T09:00:00"),
                y: 13
              },
              {
                x: new Date("2018-08-03T10:00:00"),
                y: 14
              },
              {
                x: new Date("2018-08-03T11:00:00"),
                y: 12
              },
              {
                x: new Date("2018-08-03T12:00:00"),
                y: 11
              },
              {
                x: new Date("2018-08-03T13:00:00"),
                y: 5
              },
              {
                x: new Date("2018-08-03T14:00:00"),
                y: 9
              },
              {
                x: new Date("2018-08-03T15:00:00"),
                y: 9
              },
              {
                x: new Date("2018-08-03T16:00:00"),
                y: 8
              },
              {
                x: new Date("2018-08-03T17:00:00"),
                y: 13
              },
              {
                x: new Date("2018-08-03T18:00:00"),
                y: 17
              },
              {
                x: new Date("2018-08-03T19:00:00"),
                y: 15
              },
              {
                x: new Date("2018-08-03T20:00:00"),
                y: 13
              },
              {
                x: new Date("2018-08-03T21:00:00"),
                y: 11
              },
              {
                x: new Date("2018-08-03T22:00:00"),
                y: 9
              },
              {
                x: new Date("2018-08-03T23:00:00"),
                y: 8
              },
              {
                x: new Date("2018-08-03T23:59:00"),
                y: 5
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