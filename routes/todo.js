var express = require('express');
var router = express.Router();
var Mongoose = require('mongoose');
var Item = Mongoose.model('Item', {
	item: String,
	dueDate: Date,
	isCompleted: Boolean
})


/* GET users listing. */
router.get('/', function(req, res, next) {
	Item.find({}, function(err, items) {
  res.send();
  })
});

router.post('/', function(req,res) {
	var item = new Item(req.body);
	item.save(function(err, savedUser) {
		res.send();
	});
});

router.put('/:id/complete', function(req,res) {
	Item.update({_id: req.params.id}, {$set:{isCompleted: true}}, function(err){
		console.log(req.params.id);
		res.send();
	});
})

router.delete('/:id', function(req,res){
	Item.findOneAndRemove({"_id": req.params.id}, function(err){
		res.send();
	})
});
	

module.exports = router;


// ObjectId("5600de26f4d29a7b5e246520")