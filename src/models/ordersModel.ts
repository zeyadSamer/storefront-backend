
//@ts-ignore
import client from'../database';
import express from 'express';

export type Order={

    id?:Number;
    quantity:Number;
    activeStatus:string;
    user_id:Number;

}

class orderStore {


  async show(user_id:Number):Promise<Order>{
     try{
     
   //@ts-ignore
    const connection= await client.connect();
     
   
    const sql='select * from orders where users_id=$1 ';
  
   const result =await connection.query(sql,[user_id]);


   connection.release();
   
   return result.rows[0];

     }catch(err){

      throw err;
        

 
     }


  }







    async create(order:Order):Promise<Order>{


      try
      {
    //@ts-ignore
    const connection=await client.connect();
     
   
    
    const sql=`insert into orders(id,quantity,activestatus,users_id) values($1,$2,$3,$4) returning *`;

    const result =await connection.query(sql,[order.id,order.quantity,order.activeStatus,order.user_id]);
     
    connection.release();
    
   return result.rows[0];


      }catch(err){
          
        
         throw err;



      }

    }





 async addProductToOrder(quantity:Number,order_id:Number,product_id:Number):Promise<Order> {


   
    try{

    //@ts-ignore
    const connection=await client.connect();
  
   

    const sql=`insert into orders_products(quantity,orders_id,products_id) values($1,$2,$3) returning *`;


    const result= await connection.query(sql,[quantity,order_id,product_id]);
    
    connection.release();

     
    return result.rows[0];

    }
    catch(err)
    {
       throw err;
    }


 }




















}


export default orderStore;
