
import { productStore } from "../models/productsModel";

const products=new productStore();

describe('testing product model',()=>{
    
    

  
  it('should add product successfully to database and return defined value',async()=>{

    const result= await products.addProduct({id:1,name:'tv',price:'400$'})
   
    expect(result).toBeDefined();
  
  
  
  
  })





 it('should return products successfully and return defined value ',async()=>{

  
    const result = await products.index();

    expect(result).toBeDefined();



 })   


  it('should show certain product and return defined value',async()=>{

   const result= await products.show(1);
  
   expect(result).toBeDefined();
   
  });



    
    
})

