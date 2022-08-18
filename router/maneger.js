import {genPassword,creatManeger,
       getManeger, createConnection} from "../helper.js";
import express from "express";
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";
import { Db } from "mongodb";
const router=express.Router();








router.post("/signup",async (request,response)=>{
    const client=await createConnection()
    const {username,password}=request.body;
    console.log(username,password);
   const hashedPassword= await genPassword(password);
   console.log(hashedPassword);
   const addData=await creatManeger(client, username, hashedPassword);
   console.log(addData);
    response.send(addData);
});

router.get("/",async(request,response)=>{
    const client= await createConnection();
    const result=await getManeger(client);
    console.log(result);
    response.send(result);
});

/*router.post("/login",async (request,response)=>{
    const client=await createConnection()
    const {username,password}=request.body;
   const result=await client.db("users").collection("Manger").findOne({username:username});
   console.log(result);
  const storedDbpassword=result.password;
   const isPasswordmatch=await bcrypt.compare(password,storedDbpassword);
   console.log(isPasswordmatch);
    /*if(isPasswordmatch){
        const token=Jwt.sign({id:result._id},process.env.SECRET_KEY);
        response.send({message:"Successfully login!!!",token:token});
    }else{
        response.send({message:"Invalid login !!!"});
    }
})*/;

router.post("/login",async (request,response)=>{
    const client=await createConnection()
    const {username,password}=request.body;
    console.log(username,password);
    const insert=await client. db("users").collection("Manger").findOne({username:username});
    console.log(insert);
    const storedDbpassword=insert.password;
    const isPasswordmatch= await bcrypt.compare(password,storedDbpassword);
    //response.send({isPasswordmatch});
    if(isPasswordmatch){
        const token=Jwt.sign({id:insert._id},process.env.SECRET_KEY)
        response.send({message:"successfully login",token:token});
        console.log({message:"Successfully login!!!",token:token})
    }else{
        response.send({message:"Invalid login!!!"});
        console.log({message:"Invalid login !!!"})
    }
});
export const manegerRouter=router;
