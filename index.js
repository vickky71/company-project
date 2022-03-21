var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Students");
  var STDU = [
    {"sid":1,"Roll no":6,"city":"Indonesia","phone no":"+62 786 806 0897"},
    {"sid":2,"Roll no":85,"city":"United States","phone no":"+1 918 982 2491"},
    {"sid":3,"Roll no":49,"city":"Nigeria","phone no":"+234 318 137 8227"},
    {"sid":4,"Roll no":81,"city":"Philippines","phone no":"+63 205 849 8911"},
    {"sid":5,"Roll no":90,"city":"Syria","phone no":"+963 360 328 7396"},
    {"sid":6,"Roll no":35,"city":"Peru","phone no":"+51 469 247 3253"},
    {"sid":7,"Roll no":45,"city":"Japan","phone no":"+81 262 445 6313"},
    {"sid":8,"Roll no":85,"city":"Slovenia","phone no":"+386 363 576 6519"},
    {"sid":9,"Roll no":69,"city":"Czech Republic","phone no":"+420 734 207 0433"},
    {"sid":10,"Roll no":51,"city":"Gambia","phone no":"+220 342 464 9595"},
    {"sid":11,"Roll no":86,"city":"Nigeria","phone no":"+234 409 620 7376"},
    {"sid":12,"Roll no":93,"city":"Vietnam","phone no":"+84 616 640 1008"},
    {"sid":13,"Roll no":77,"city":"Venezuela","phone no":"+58 659 198 0848"},
    {"sid":14,"Roll no":93,"city":"Indonesia","phone no":"+62 198 245 6345"},
    {"sid":15,"Roll no":59,"city":"Ivory Coast","phone no":"+225 813 149 5070"},
    {"sid":16,"Roll no":36,"city":"Kazakhstan","phone no":"+7 912 807 8079"},
    {"sid":17,"Roll no":76,"city":"Bulgaria","phone no":"+359 990 142 2581"},
    {"sid":18,"Roll no":7,"city":"Greece","phone no":"+30 261 427 3700"},
    {"sid":19,"Roll no":64,"city":"Yemen","phone no":"+967 160 128 1140"},
    {"sid":20,"Roll no":44,"city":"China","phone no":"+86 814 543 0556"}]

 
  dbo.collection("student").insertMany(STDU, function(err, res) {
    if (err) throw err;
    console.log("all document inserted");
    db.close();
  });
});