var tableData = require("../data/enemies")

module.exports = function(app) {

app.get("/api/home", function(req,res){
 res.json(tableData);
});




})