import express from 'express';
import cors from 'cors';
import {engine} from "express-handlebars";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import shoesAPI from './api/shoe-api.js';
import shoeQueries from './services/shoe-database.js';

var app = express()
var pgp = pgPromise();

var connectionString = process.env.DATABASE_URL || 'postgres://nkndnlfv:v1L6kH69CUXaXSjXIBfO-82KUL3gOQ-c@tyke.db.elephantsql.com/nkndnlfv'
var db = pgp(connectionString)

var shoedb = shoeQueries(db)
var shoeapi = shoesAPI(shoedb)

// use the express.static built-in middleware to serve static file 'css'
app.use(express.static(('public')))

// set and callback engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
  // If you want to allow requests from any domain, you can use:
  app.use(cors());


// Api routes 
app.post('/api/shoes/sold/:id',function(req,res){
    res.render('index')
})
app.get('/api/shoes/brand/:brandname/size/:size',shoeapi.getShoeByBrandAndSize)
app.get('/api/shoes/size/:size',shoeapi.getShoeBySize)
app.get('/api/shoes/brand/:brandname',shoeapi.getShoeByBrand)
app.get('/api/shoes',shoeapi.showAllShoe)
app.get('/api/shoes/color/:color',shoeapi.getShoeByColor)
app.post('/api/shoes', shoeapi.addShoe)


var PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log('🚀 App has started on', PORT)
})