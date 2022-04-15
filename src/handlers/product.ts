import { productStore} from "../models/productsModel";
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import authenticateJwt from "./jwtauth";


//create an instance of productStore class
const productOperations=new productStore();

const index=async(req:Request,res:Response)=>{

  try{

const productsToShow=await productOperations.index();

res.json(productsToShow);
  }catch(err){
    throw err;

    res.send('failed to show all products');
  }

}



const showCertainProduct=async(req:Request,res:Response)=>{
   
  try{

   const id=parseInt(req.params.id);

  const certainProduct= await productOperations.show(id);
   
   


  res.json(certainProduct);

  }catch(err)
  {
    throw err;
    res.send('failed to show that product');
  }
}


const productsRoutes=(app:express.Application)=>{
  

    app.get('/products',index);
    app.get('/products:id',showCertainProduct)
    app.post('/products:id',authenticateJwt,addNewProduct);




}

const addNewProduct=async(req:Request,res:Response)=>{

  try{
 
    const name=(req.body.name as unknown)as string;
    const price=(req.body.price as unknown ) as string;
    const id=parseInt(req.params.id) ;
 
 
    const newProduct={
      id,
      price,
      name
    
      

    }

    

    const addedProduct=await productOperations.addProduct(newProduct);
        
   
   res.json(addedProduct);
  }catch(err)
  {
    throw err;
    res.send('failed to add product');
  }

}



export default productsRoutes;


