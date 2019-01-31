'use strict'; // ensures values added to our model instance
// that were not specified in our schema do not get saved to the db

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var taskSchema = new schema({
  name: {
    type: String,
    required: 'Kindly enter the name of your taks'
  },
  Created_date: {
    type: String,
    default: "0"
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
}, { collection: 'Tododb' });

// When no collection argument is 
// passed, Mongoose produces a 
// collection name by passing the 
// model name to the utils.toCollectionName
//  method. This method pluralizes 
//  the name. If you don't like this 
//  behavior, either pass a 
//  collection name or set your 
//  schemas collection name option.

module.exports = mongoose.model('Tasks', taskSchema);


// db.collection.insert()

// collection > is a placeholder value...

// A collection is the equivalent 
// of an RDBMS table. A collection
//  exists within a single database.
//   Collections do not enforce a 
//   schema.