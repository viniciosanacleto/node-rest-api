'use strict';

var mongoose = require('mongoose'),
    Example = mongoose.model('Example');

/**
 * Create a new Example
 * @param {*} req
 * @param {*} res
 */
exports.create = function (req, res) {
  var newExample = new Example(req.body);
  newExample.save(function (err, example) {
    if (err)
      res.send(err);
    res.json({'message':'Example sucefully created!','ok':true});
  });
};

/**
 * Return a list of all Examples in DB
 * @param {*} req
 * @param {*} res
 */
exports.all = function (req, res) {
  Example.find({}, function (err, example) {
    if (err)
      res.send(err);
    res.json(example);
  });
};

/**
 * Return a Example by ID
 * @param {*} req
 * @param {*} res
 */
exports.byId = function (req, res) {

  var example = Example.findById(req.params.id, function (err, example) {
    if (err) {
      res.send(err);
    } else {
      res.json(example)
    }
  });
}

/**
 * Update a Example
 * @param {*} req
 * @param {*} res
 */
exports.update = function(req,res){
  req.body.updated_at = Date.now()
  Example.findByIdAndUpdate(req.params.id,req.body,function(err,example){
    if(err){
      res.send(err)
    }
    else{
      res.json({'message':'Example sucefully updated!','ok':true})
    }
  })
}

/**
 * Delete a Example
 * @param {*} req
 * @param {*} res
 */
exports.delete = function (req, res) {
  Example.findByIdAndRemove(req.params.id, function (err, example) {
    if(err){
      res.send(err);
    }
    else{
      if(example != null){
        res.json({'message':'Example sucefully deleted!','ok':true})
      }
      else{
        res.json({'message':'Example '+req.params.id+' not exist.','ok':false})
      }
    }
  });
}
