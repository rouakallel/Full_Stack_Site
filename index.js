import express from "express";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const app = express();
const port = 4000;

dotenv.config();
const uri = process.env.STRING_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get("/",(_,res) => {
    client.connect( (err,db)=> {
        console.log("Connecté avec succes à la db");
        if (err || !db) {
           return false; 
        }
        db.db("blog").collection("posts").find().toArray(function (err,results) {
         if (!err) {
            console.log(results);
         }   
         if (!err){
            res.status(200).send(results);a
         }
      });
      // perform actions on the collection object
     // client.close();
    });
   //res.send("Hello Express!")
})
app.listen(port, () => {
  console.log("serveur demarré avec succès sur le port 4000");
}) 

