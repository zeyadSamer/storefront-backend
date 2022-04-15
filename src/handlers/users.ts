import storeUser from "../models/usersModel";
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import authenticateJwt from "./jwtauth";



const userOperations=new storeUser();





const showAllUsers= async(req:Request,res:Response)=>{

    try{
   
    const usersToShow=await userOperations.index();
    res.json(usersToShow);
    }catch(err){
        throw err;
        res.send('failed to show users');
        
    }

}


const showCertainUser=async(req:Request,res:Response)=>{

    try{
    
    const id=parseInt(req.params.id);

    const userToShow=await userOperations.show(id);
    res.json(userToShow);
    }catch(err)
    {
        throw err;
        res.send('failed to show that user');
    }

}


const CreateNewUser= async(req:Request,res:Response)=>{


    const firstName=(req.body.firstName as unknown)as string;
    const lastName=(req.body.lastName as unknown) as string;
    const password=(req.body.password as unknown) as string;
    const id=parseInt(req.params.id);


    const user={
        
        id,
        firstName,
        lastName,
        password

    }
   
    try{
     const newUser=await userOperations.createUser(user);

     const secretpassword=(process.env.TOKEN_SECRET as unknown) as string;

     const token=jwt.sign({user:newUser},secretpassword)

     res.json(token);

    }catch(err){

          throw err;
    }

}


const authenticate=async(req:Request,res:Response)=>{

    const firstname=(req.body.firstName as unknown)as string;
    const lastname=(req.body.lastName as unknown) as string;
    const passwordToBeChecked=(req.body.password as unknown) as string;


   const user=await userOperations.authenticateUser(firstname,lastname,passwordToBeChecked); 
   
  

   if(user===null)
   {
     res.send('user not found , user must sign up first');
   }else{

    try{
   

        const secretpassword=(process.env.TOKEN_SECRET as unknown) as string;
   
       const token=jwt.sign({user:user},secretpassword)
   
    
        res.json(token);

       }catch(err){
   
             throw err;
       }
   
   
   
   

   }


}


const userRoutes=(app:express.Application)=>{



    app.get('/users',authenticateJwt,showAllUsers);
    app.get('/users:id',authenticateJwt,showCertainUser);
    app.post('/users:id',CreateNewUser);
    app.post('/users/authenticate',authenticate)




}

export default userRoutes;