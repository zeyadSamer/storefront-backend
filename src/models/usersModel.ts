import bcrypt from 'bcrypt';
//@ts-ignore
import client from '../database';


export type User= {

    id:number;
    firstName:string;
    lastName:string;
    password:string;
    
}


const pepper=process.env.BCRYPT_PASSWORD;
 
const saltRounds=(process.env.SALT_ROUNDS  as unknown)as string;

class storeUser{




    async index():Promise<User[]>{

    //@ts-ignore
    const connection= await client.connect();
    const sql =`select * from users `;
    const result=await connection.query(sql);
    
    connection.release();

     return result.rows;




    }


   //show certain user

   async show(id:Number):Promise<User>{



  //@ts-ignore
  const connection= await client.connect();
  const sql =`select * from users where id=$1`;
  const result=await connection.query(sql,[id]);
  
  connection.release();

   return result.rows[0];


 
   }

   //create user  or sign up


   async createUser(u:User):Promise<User>{
   
    try{
    //@ts-ignore
   const connection= await client.connect();
   
   const sql=`insert into users(id,firstname,lastname,userpassword) values($1,$2,$3,$4) returning *`;
  

   const hashedPassword=bcrypt.hashSync(u.password+pepper,parseInt(saltRounds));
 
   const result=await connection.query(sql,[u.id,u.firstName,u.lastName,hashedPassword]);
   
 

   connection.release();
   
    

   return result.rows[0];

    }
     catch(err)
    
     {
        
     throw err;
    }

   }



  async authenticateUser(firstname:string,lastname:string,password:string):Promise<User | null> {

   try{

    //@ts-ignore
   const connection=await client.connect();

   //get user data to check on it
   const sql=`select * from users where firstname=($1) and lastname=($2) `;

   const result = await connection.query(sql,[firstname,lastname]);
    
    connection.release();
   
   
    //check if user didn't sign up from the beginning

   

    if(result.rows.length) {
      
        const user = result.rows[0]
       //check user password
         
        

       if(bcrypt.compareSync(password+pepper,user.userpassword))
       {
           
           return user; 
       } 

    }

 return null;
  
}catch(err)
  {
      console.log('catched an error');
      throw err;
  }



  }



}

export default storeUser;