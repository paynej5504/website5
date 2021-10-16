const express = require('express');
const ejs = require('ejs');

// create express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

/* Start Routing */
// home path
app.get('/', (req, res) => {
  res.render('dashboard');
});

app.get('/history', (req, res) => {
  res.render('history');
});

/* End Routing */

// serve static files
app.use(express.static('public'));

// start listening on port 3000
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});