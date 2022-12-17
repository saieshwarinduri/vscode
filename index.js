const express = require('express');
const sqlite3=require('sqlite3')
const path = require('path')
const {open} =require('sqlite');
const { json } = require('express');
const app=express()
app.use(function(req, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
    });

const dbPath= path.join(__dirname, 'database.db')

let db=null 


const initailizerDBAndServer= async ()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database
        });
        app.listen(4000, ()=>{
            console.log("server has started")
        });
    }catch(e){
        console.log(`DB Error: ${e.message}`)
        process.emit(1);

    }
}


app.get('/api', async(request, response)=>{
    const query=`SELECT * FROM mygallery;`
    const result =await  db.all(query)
    response.send(result);
})








initailizerDBAndServer();

