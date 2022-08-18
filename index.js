

//const{ response} = require("express");
//const { request } = require("express");

//const express=require("express");
//import express from "express";
//import express ,{request ,response} from "express";
import express from "express";
import { response } from "express";
import { request } from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import { manegerRouter } from "./router/maneger.js";
import { usersRouter } from "./router/users.js";
const app=express();
const PORT=5000;

/*const users=[
    {
     "createdAt": "2022-01-08T00:47:57.603Z",
     "name": "Velma Hoeger",
     "pic": "https://cdn.fakercloud.com/avatars/amayvs_128.jpg",
     "color": "teal",
     "age": 86,
     "id": "1"
    },
    {
     "createdAt": "2022-01-07T22:13:37.883Z",
     "name": "Myron Jenkins",
     "pic": "https://cdn.fakercloud.com/avatars/madebyvadim_128.jpg",
     "color": "color 8",
     "age": 92,
     "id": "2"
    },
    {
     "createdAt": "2022-01-07T19:40:02.041Z",
     "name": "Tammy Batz",
     "pic": "https://cdn.fakercloud.com/avatars/johannesneu_128.jpg",
     "color": "Red",
     "age": 74,
     "id": "3"
    },
    {
     "createdAt": "2022-01-08T05:59:23.901Z",
     "name": "Rosie Rodriguez",
     "pic": "https://cdn.fakercloud.com/avatars/guiiipontes_128.jpg",
     "color": "teal",
     "age": 78,
     "id": "8"
    },
    {
     "createdAt": "2022-01-08T10:42:31.252Z",
     "name": "Mrs. Josephine Roob",
     "pic": "https://cdn.fakercloud.com/avatars/psdesignuk_128.jpg",
     "color": "yellow",
     "age": 43,
     "id": "4"
    },
    {
     "createdAt": "2022-01-07T20:04:24.383Z",
     "name": "Woodrow Hane",
     "pic": "https://cdn.fakercloud.com/avatars/badlittleduck_128.jpg",
     "color": "teal",
     "age": 16,
     "id": "28"
    },
    {
     "createdAt": "2022-01-08T10:47:03.182Z",
     "name": "Betsy Gulgowski",
     "pic": "https://cdn.fakercloud.com/avatars/bermonpainter_128.jpg",
     "color": "Red",
     "age": 47,
     "id": "5"
    },
    {
     "createdAt": "2022-01-08T13:34:20.260Z",
     "name": "Angelina Jast",
     "pic": "https://cdn.fakercloud.com/avatars/pierrestoffe_128.jpg",
     "color": "teal",
     "age": 34,
     "id": "6"
    },
    {
     "createdAt": "2022-01-08T03:27:11.846Z",
     "name": "Roger Von I",
     "pic": "https://cdn.fakercloud.com/avatars/timmillwood_128.jpg",
     "color": "green",
     "age": 22,
     "id": "7"
    }
];*/


app.use(express.json());
//connecting local database to the server
dotenv.config();
/*async function createConnection(){
    const MONGO_URL=process.env.MONGO_URL;
   // const MONGO_URL="mongodb+srv://Malatesh:Guvi1234@cluster0.asaxd.mongodb.net/users";
    const client=new MongoClient(MONGO_URL);
   await client.connect();
   console.log("successfully Connected!!!");
   return client;

   //const user= await client.db("users").collections("people").findOne({id:"5"});
  // console.log(user);
}*/

//createConnection();


app.get("/",(request,response)=>{
    response.send("Hello World Yashu!!!");
});

app.use("/mangers",manegerRouter);
app.use("/users",usersRouter);




/*async function genPassword(password){
    const salt=await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

app.post("/mangers/signup",async (request,response)=>{
    const client=await createConnection()
    const {username,password}=request.body;
    console.log(username,password);
   const hashedPassword= await genPassword(password);
   console.log(hashedPassword);
   const addData=await creatManeger(client, username, hashedPassword);
   console.log(addData);
    response.send(addData);
})

app.get("/mangers",async(request,response)=>{
    const client= await createConnection();
    const result=await getManeger(client);
    console.log(result);
    response.send(result);
})*/



/*app.get("/users/:id",async(request,response)=>{
    const {id}=request.params;
    console.log(request.params)
    const client= await createConnection();
    const user= await getUserbyid(client, id);
    console.log(user);
   //response.send(users.filter((user)=>user.id==id));
   response.send(user);

});

app.delete("/users/:id",async(request,response)=>{
    const {id}=request.params;
    console.log(request.params);
    const deleteData=request.body;
    const client= await createConnection();
    const user= await deleteUserbyid(client, id);
    console.log(user,deleteData);
    response.send(user);

});

app.patch("/users/:id",async(request,response)=>{
    const {id}=request.params;
    console.log(request.params);
    const client = await createConnection();
    const upadteData=request.body;
    const user= await upDateUsersbyid(client, id, upadteData);
    console.log(user,upadteData);
    response.send(user);

})*/



/*app.get("/users",async(request,response)=>{
   // const{ color,age}=request.query;
    //console.log(request.query,color,age)
    const client= await createConnection();
    const users=  await getAllusers(client);
    console.log(users);
    response.send(users);
   if(!color && !age){
        response.send(users);
    }

    else if(color && !age){
        response.send(users.filter((user)=>user.color==color));

    }
    else if(!color && age){
        response.send(users.filter((user)=>user.age>=age));
    }
    else{
        response.send(users.filter((user)=>user.color==color && user.age>=age));
    }
    //response.send(users.filter((user)=>user.color==color));
})*/

/*app.post("/users",async(request,response)=>{
    const client = await createConnection();
    console.log(request.body);
    const addData=request.body;
    const result= await createUsers(client, addData);
    console.log(result,addData);
    response.send(result);

})*/

app.listen(PORT,()=>console.log("The Server has been Started in :",PORT));

/*async function deleteUserbyid(client, id) {
    return await client.db("users").collection("people").deleteOne({ id: id });
}

async function upDateUsersbyid(client, id, upadteData) {
    return await client.db("users").collection("people").updateMany({ id: id }, { $set: upadteData });
}

async function createUsers(client, addData) {
    return await client.db("users").collection("people").insertMany(addData);
}

async function getAllusers(client) {
    return await client.db("users").collection("people").find({}).toArray();
}

async function getUserbyid(client, id) {
    return await client.db("users").collection("people").findOne({ id: id });
}

async function creatManeger(client, username, hashedPassword) {
    return await client.db("users").collection("Manger").insertOne({ username: username, password: hashedPassword });
}

async function getManeger(client) {
    return await client.db("users").collection("Manger").find().toArray();
}*/
