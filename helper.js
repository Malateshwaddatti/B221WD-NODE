import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

 async function getManeger(client) {
    return await client.db("users").collection("Manger").find().toArray();
}

async function creatManeger(client, username, hashedPassword) {
    return await client.db("users").collection("Manger").insertOne({ username: username, password: hashedPassword });
}

 async function getAllusers(client) {
    return await client.db("users").collection("people").find({}).toArray();
}

async function getUserbyid(client, id) {
    return await client.db("users").collection("people").findOne({ id: id });
}

 async function createUsers(client, addData) {
    return await client.db("users").collection("people").insertMany(addData);
}

 async function upDateUsersbyid(client, id, upadteData) {
    return await client.db("users").collection("people").updateMany({ id: id }, { $set: upadteData });
}

async function deleteUserbyid(client, id) {
    return await client.db("users").collection("people").deleteOne({ id: id });
}

async function genPassword(password){
    const salt=await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

async function createConnection(){
    const MONGO_URL=process.env.MONGO_URL;
   // const MONGO_URL="mongodb+srv://Malatesh:Guvi1234@cluster0.asaxd.mongodb.net/users";
    const client=new MongoClient(MONGO_URL);
   await client.connect();
   console.log("successfully Connected!!!");
   return client;
}

 

export{getManeger,creatManeger,
      getAllusers,getUserbyid,
      upDateUsersbyid,deleteUserbyid,
      createUsers,
      createConnection,genPassword};