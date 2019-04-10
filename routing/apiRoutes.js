var enemies = require("../data/enemies.js");

module.exports = function (app) {
  app.get("/api/enemies", function (req, res) {
    res.json(enemies);
  });

  app.post("/api/enemies", function (req, res) {
    var differenceTotal = 0;
    var bestMatch = {
      name: "",
      photo: "",
      difference: 1000
    }
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;
    res.send(userData)
  })
  
// var sum = b.reduce((a, b) => a + b, 0);
// console.log("User score" + sum);
// console.log("Best match" + bestMatch.difference)

// for(var i = 0; i < friends.length; i++){
//   console.log(enemies[i].name);
//   differenceTotal = 0;
//   console.log("total Diff " + differenceTotal);
  
// }


// }

}