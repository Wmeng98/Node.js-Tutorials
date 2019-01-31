'use strict';


module.exports = function(app) {
  var todoList = require('../controllers/todoController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

};

//By using app.route() we can clean
// things up and remove some
// redundancy by chaining both methods 
// the same route.

