var tableData = require("../data/enemies")

module.exports = function(app) {

app.get("/api/home", function(req,res){
 res.json(tableData);
});

app.post("/api/tables", function(req, res) {

  if (tableData.length < 10) {
    tableData.push(req.body);
    res.json(true);
  }
  else {
    waitListData.push(req.body);
    res.json(false);
  }


});





}