

// @ts-ignore

import client from'../database';

import express from 'express';
  

export type Product={
    id: Number;
    price:string;
    name:string
    

};


export class productStore {


    //showing all products
  async index():Promise<Product[]>
  {
    

    
    try{

  // @ts-ignore
 const connection=await client.connect();
 const sql='select * from products';
 const result=await connection.query(sql);
  
  connection.release();

  return result.rows;

    }catch(err)

    {
        throw new Error(`cannot get products.  ${err} `);
    }


  };


 async show(id:number):Promise<Product> {

    try{
 // @ts-ignore
 const connection = await client.connect();
 const sql='select * from products where id=($1)';
const result = await connection.query(sql,[id]);

connection.release();

return result.rows[0];
    
}
    catch(err){
        throw new Error(`cannot show the product. ${err}`)



    }



 }
  






//neeeds token
   async addProduct(product:Product):Promise<Product> {
     

    
           
  try{
  
       // @ts-ignore
       const connection = await client.connect();


       const sql ='insert into products(id,productName,price) values($1,$2,$3) returning *';
       
      const result= await connection.query(sql,[product.id,product.name,product.price]);
     
      
       connection.release();

       


     return result.rows[0];

   }catch(err){
 
    throw err;
         
            
   }


   }



    


}

