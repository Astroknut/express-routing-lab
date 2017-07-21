const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const candies = [
	{
		"id": 1,
		"name": "ChewingGum",
		"color": "Red"
	},
	{
		"id": 2,
		"name": "Pez",
		"color": "Green"
	},
	{
		"id": 3,
		"name": "Marshmallow",
		"color": "pink"
	},
	{
		"id": 4,
		"name": "Candy Stick",
		"color": "blue"
	}
];

//PASSED
router.get('/', function(req,res) {
	res.send(candies);
});

//PASSED
router.get('/:id', function(req,res) {
	res.send(candies[req.params.id - 1]);
});

//PASSED
router.post('/', function(req,res) {
	const newCandy = req.body;
	candies.push(newCandy);
	res.send(newCandy);
});

//PASSED
router.put('/:id', function(req,res) {
	const thisCandy = (candies[req.params.id - 1]);
	thisCandy.name=req.body.name;
	thisCandy.color=req.body.color;
	res.send(thisCandy);
});

//PASSED
router.delete('/:id', function(req,res) {
	const targetCandyIndex = req.params.id - 1;
	candies.splice(targetCandyIndex, 1, null);
	res.send("Candy Terminated");
});




module.exports = router;