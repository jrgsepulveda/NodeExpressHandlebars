// Node Dependencies
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

// Open Server
let PORT = process.env.PORT || 3000;

let app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
let exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


let router = require('./controllers/burgers_controller.js');
app.use('/', router);



app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});