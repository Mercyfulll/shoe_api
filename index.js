import express from 'express';
import {engine} from "express-handlebars";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import flash from "express-flash";
import session from "express-session";
import shoesAPI from './api/shoe-api.js';
import shoeQueries from './services/shoe-database.js';
import routes from './routes/routes.js';



var app = express()
var pgp = pgPromise();


var connectionString = process.env.DATABASE_URL || 'postgres://nkndnlfv:v1L6kH69CUXaXSjXIBfO-82KUL3gOQ-c@tyke.db.elephantsql.com/nkndnlfv'

var db = pgp(connectionString)

var shoedb = shoeQueries(db)
var route = routes(db)

var shoeapi = shoesAPI(shoedb)


// use the express.static built-in middleware to serve static file 'css'
app.use(express.static(('public')))

//use session to maintain data on the application
app.use(session({
    secret : 'This is a string',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// set and callback engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',route.home)
app.post('/shoes/brand/:brandname',route.filterBrand)
app.post('/shoes/size/:size',route.filterSize)
app.post('/shoes/brand/:brandname/size/:size',route.filterBrandSize)

// Api routes 
app.post('	/api/shoes/sold/:id',function(req,res){
    res.render('index')
})
app.get('/api/shoes/brand/:brandname/size/:size',shoeapi.getShoeByBrandAndSize)
app.get('/api/shoes/size/:size',shoeapi.getShoeBySize)
app.get('/api/shoes/brand/:brandname',shoeapi.getShoeByBrand)
app.get('/api/shoes',shoeapi.showAllShoe)
app.post('/api/shoes', shoeapi.addShoe)

var PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log('🚀 App has started on', PORT)
})