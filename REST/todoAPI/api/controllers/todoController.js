'use strict';

var mongoose = require('mongoose'),
task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  task.find({}, function(err, task) {

    if (err) res.send(err);
    console.log("******");
    console.log(task);
    console.log("******");
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new task(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  task.findById(req.params.taskId, function(err, task){
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  task.remove({_id: req.params.taskId}, function(err, task) {
    if (err) res.send(err);
    res.json({message: 'Task succesfully deleted...'});
  });
};