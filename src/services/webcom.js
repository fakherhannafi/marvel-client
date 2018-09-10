let myRefPrismeNbRequest = new Webcom("");
/* let myRefPrismeTimeToInit = new Webcom(
  ""
); */

export default {
  getNbRequestStaticMeasures() {
    let res = [[], [], [], []];
    let lastDate = myRefPrismeNbRequest.endAt().limit(1);
    lastDate.on("child_added", function(snapshot) {
      let staticMeasures = [
        snapshot.val()["J-0"],
        snapshot.val()["J-1"],
        snapshot.val()["J-7"],
        snapshot.val()["J-28"]
      ];
      for (let i = 0; i < 4; i++) {
        for (let time in staticMeasures[i]) {
          res[i].push({
            x: new Date("2018-08-03T" + time),
            y: Number(staticMeasures[i][time])
          });
        }
      }
    });
    return res;
  },

  getNewNbRequest() {
    let lastDate = myRefPrismeNbRequest.endAt().limit(1);
    lastDate.on("child_changed", function(snapshot) {
      let todaysValues = snapshot.val()["J-0"];
      let LastValue = Object.values(todaysValues).slice(-1)[0];
      let LastHour = Object.keys(todaysValues).slice(-1)[0];
      this.datacollection[0].data.push({
        x: new Date("2018-09-10T" + LastHour),
        y: LastValue
      });
    });
  }
};
