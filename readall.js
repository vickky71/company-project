var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Students");
  dbo.collection("student").find({}).toArray(function(err, result) {
    
    if (err) throw err;
    console.log(result);
result.forEach(element => {
      dbo.collection("parents").find({}).toArray(function(err, result) {
        console.log(result);
        db.close();
        //find({}, { projection: { _id: 0, name: 1, address: 1 } })
    });

});
});
});
  
  
