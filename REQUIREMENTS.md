



**Routes**

note: url starts with: 'http:localhost:3000/'



## products routes
 index route: '/products' [GET] :used to show all products in the store

 show route for specific product:'/products:id'[GET]-->ex:'/products1'

 create route:'/products:id'[POST]:used to create a new product in the database
 ex:'/products1'

 data that must be posted in create route:
 {
     "name":"tv",
     "price":"400$"

 }
 
important: In addition to the token that must be posted in the authorization header<bearer token>


## users routes




1-create user route(sign up):'/users:id'[POST]-->ex:'/users1'

data  must be posted in that format in create route:
{
    "firstName":"abc",
    "lastName":"def",
    "password":"123"
    
}
token will be received here

2-authenticate route(sign in):'/users/authenticate'[POST]

data must be posted in that format in authenticate route:

{

    "firstName":"abc",
    "lastName":"def",
    "password":"123"

}

token will be received here



3- index route to show all users:'/users' [GET]

important:  token must be passed in the authorization header<bearer token>

4- show route to show specific user:'/users:id'[GET]

important:  token must be passed in the authorization header<bearer token>



## order routes

1-create order route:'/orders:id' --> ex:'/orders1'[POST]
important:  token must be passed in the authorization header<bearer token>


data must be posted
{
    "quantity":"2",
    "activeStatus":"active",
    "user_id":"3"
    


}


2-add product to order (cart) routes: '/orders/:id/products'-->ex:'/orders/1/products'[POST]
important:  token must be passed in the authorization header<bearer token>

data must be posted {

  "quantity":"2",
  "productId":"1"


}


3- show order done by a specific user route:'/orders/:id'--> ex:'/orders/1' [GET]

important:  token must be passed in the authorization header<bearer token>

