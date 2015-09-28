var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('grocerylist',['grocerylist']);

var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/grocerylist', function (req, res) {
  db.grocerylist.find(function (err, docs){
  	res.json(docs); //get requst
  });
});

app.post('/grocerylist', function (req, res) {
	db.grocerylist.insert(req.body, function (err, docs){
		res.json(docs);
	});
});

app.delete('/grocerylist/:id', function (req, res) {
	var id = req.params.id;
	db.grocerylist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.listen(3000);
console.log("Ready to do stuff on port 3000");