import orderStore from "../models/ordersModel";


const order= new orderStore();

describe('testing ordersModel',()=>{


    it('should create order successfully',async()=>{

        const result = await order.create(

  {
            
   id:1,
    quantity:20,
    activeStatus:'active',
    user_id:1,

  });

  
  expect(result).toBeDefined();

     



    })




  


    it('should product to order successfully',async()=>{

     
      const result= await order.addProductToOrder(20,1,1);

     

      expect(result).toBeDefined();


    })






    it('should show order successfully',async()=>{

     
      const result= await order.show(1);
      expect(result).toBeDefined();


    })


})

