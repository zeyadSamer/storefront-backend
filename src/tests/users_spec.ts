import storeUser from "../models/usersModel";


const users=new storeUser();

describe('testing user model',()=>{


   it('should create a user ',async()=>{
 
   const result=await users.createUser({


    id:1,
    firstName:'zeyad',
    lastName:'ahmed',
    password:'123'

   });
   

  expect(result).toBeDefined();
 

   })






    it('should index all users',async()=>{

       const result=await users.index();


       expect(result).toBeDefined();






    })


  it('should show particular user',async()=>{



   const result= await users.show(1);

   expect(result).toBeDefined();
   





  });



  it('should authenticate user trying to sign in',async()=>{


   const result = await users.authenticateUser('zeyad','ahmed','1234');
   
  
   expect(result).toEqual(null);




  });








})