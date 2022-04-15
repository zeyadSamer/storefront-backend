# Storefront Backend Project


**ports for database and server**

server-port : 3000

database-port:5432




**database creation**

create database store;
create database testdb;




**Routes**
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


**enviromental variables**
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=store
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_TEST_DB=testdb
TOKEN_SECRET=thesecrettoken
BCRYPT_PASSWORD=pass123
SALT_ROUNDS=10
ENV=dev



**Database structure**

Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)


Table: products (id:serial primary key , productName varchar,price varchar)

Table: users (id:serial primary key ,firstname varchar,lastname varchar,userpassword  varchar)



 TABLE: orders(id SERIAL PRIMARY KEY , quantity INTEGER , activeStatus VARCHAR,

users_id [foreign key to users table]
 );




 TABLE orders_products(id SERIAL PRIMARY KEY,quantity integer,
 orders_id [foreign key to orders table],
products_id [foreign key to products table]

);





 **DB Creation and Migrations for development and testing**

.Note: reviewer should change the enviroment variable ENV to test before testing ENV=test

## development mode
starting the program :npm run watch


.to create the database to start the program,run the migrations

 by the command: db-migrate up;


## testing mode

1- change the ENV to test in the .env file  inorder to make the tests pass

2- run those commands in the testing database before running tests


## testing tables to run

-> create table products(id serial primary key,productName varchar(50),price varchar(50));


-> create table users(id SERIAL PRIMARY KEY ,firstname varchar(30),lastname varchar(30),userpassword varchar(100));

-> CREATE TABLE orders(id SERIAL PRIMARY KEY , quantity INTEGER , activeStatus VARCHAR(50),

users_id bigint REFERENCES users(id)
 );


-> 
CREATE TABLE orders_products(

id SERIAL PRIMARY KEY,
quantity integer,

orders_id bigint REFERENCES orders(id),
products_id bigint REFERENCES products(id)



);


--> npm run test





