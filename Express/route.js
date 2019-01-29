// add-on toshowcase
// how routing is implemented


// creates a Node route
app.route('/Node').get(function(req, res) {
  res.send("");
});



///////////////////////////
// app.get(...) vs. router.get(...)

// if app is simple, don't need routers

// as soon as starts growing, want to 
// separate into small "mini apps"

// easier to test and maintain...



//IDEA...

// index.js

import express from 'express';
import userRouter from './routes/user';
import bookRouter from './routes/book';

const app = express();
app.use('/user', userRouter);
app.use('/book', bookRouter);

app.listen(3000, (err) => {
  if (err){
    console.log(err);
  } else {
    console.log('App listen on port 3000');
  }
});


// ******************************************************
// ******************************************************
// The app object is instantiated on 
//creation of the Express server

// HAS A MIDDLEWARE stack that can be 
// customized in app.configure()

// To setup your middleware, you can invoke
app.use(specific middleware layer here);
// For every middleware layer you want to
// add, can be generic to all paths,
// or only triggered only on
// specific path(s) your server handles


// nonetheless, will add onto your express middleware stack

// Middleware layers can be added one by one
// in multiple invocations of "use"

// conceptual understanding here is app.stack (app middleware stack)
// looks like when logging app obejct as json to console

stack: 
   [ { route: '', handle: [Function] },
     { route: '', handle: [Function: static] },
     { route: '', handle: [Function: bodyParser] },
     { route: '', handle: [Function: cookieParser] },
     { route: '', handle: [Function: session] },
     { route: '', handle: [Function: methodOverride] },
     { route: '', handle: [Function] },
     { route: '', handle: [Function] } ]

// app.use(express.bodyParser()); >> notice route
// for this layer blank, means middleware triggered on any route

// EACH LAYER is essentially adding a function that specifically
// handles something to your flow through the middleware

// by adding 
app.use(bodyParser());
// ensuring your server handles incoming requests
// through express middleware, so now parsing
// the body of incoming requests is part of procedure that your
// MIDDLEWARE takes when handling incoming requests

// ******************************************************
// ******************************************************






/* ./routes/user.js */
// ******************

import express from 'express';
const router = express.Router();

router.get('/', function(req, res) {
  // code to get data
}); 
router.get('/{uuid}', ... {
    // code to get user related data with specific uuid
});

export default router;


/* ./routes/book.js */
// ******************
import express from 'express';
const router = express.Router();

// same idea as user.js


export default router;