const mysql=require('mysql');
const express=require('express');
var app=express();
const cors=require("cors");

app.use(cors());

app.use(express.json())

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bookstore',
    multipleStatements:true
});
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection succeded');
    else
    console.log('DB connection failed \n Error :'+JSON.stringify(err,undefined,2));
});
app.use(function(err,req,res,next){
    res.send({error:err.message});
})
//insert into user table
app.post("/register",(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    mysqlConnection.query(
        "INSERT INTO user(name,email,password)VALUES (?,?,?)",
        [name,email,password],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("values inserted")
            }
        }
    )
});
// get record from adventure table
app.post("/adventure",(req,res)=>{
    mysqlConnection.query("SELECT * FROM adventure where id BETWEEN 3 AND 13",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
app.post("/cooking",(req,res)=>{
    mysqlConnection.query("SELECT * FROM adventure where id BETWEEN 14 AND 24",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
app.post("/motivational",(req,res)=>{
    mysqlConnection.query("SELECT * FROM adventure where id BETWEEN 25 AND 35",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
app.post("/travel",(req,res)=>{
    mysqlConnection.query("SELECT * FROM adventure where id BETWEEN 36 AND 46",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})
