import{getAllusers,getUserbyid,
    upDateUsersbyid,createUsers,
    deleteUserbyid,createConnection} from "../helper.js";
import express from "express";
const router=express.Router();
import {auth} from "../Middleware/auth.js";




router.get("/:id",auth,async(request,response)=>{
    const {id}=request.params;
    console.log(request.params)
    const client= await createConnection();
    const user= await getUserbyid(client, id);
    console.log(user);
   //response.send(users.filter((user)=>user.id==id));
   response.send(user);

});


router.delete("/:id",async(request,response)=>{
    const {id}=request.params;
    console.log(request.params);
    const deleteData=request.body;
    const client= await createConnection();
    const user= await deleteUserbyid(client, id);
    console.log(user,deleteData);
    response.send(user);

});

router.patch("/:id",async(request,response)=>{
    const {id}=request.params;
    console.log(request.params);
    const client = await createConnection();
    const upadteData=request.body;
    const user= await upDateUsersbyid(client, id, upadteData);
    console.log(user,upadteData);
    response.send(user);

});


router.get("/",auth,async(request,response)=>{
    // const{ color,age}=request.query;
     //console.log(request.query,color,age)
     const client= await createConnection();
     const users=  await getAllusers(client);
     console.log(users);
     response.send(users);
    /* if(!color && !age){
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
     //response.send(users.filter((user)=>user.color==color));*/
 });
 
 router.post("/",async(request,response)=>{
     const client = await createConnection();
     console.log(request.body);
     const addData=request.body;
     const result= await createUsers(client, addData);
     console.log(result,addData);
     response.send(result);
 
 });

 export const usersRouter=router;
 
