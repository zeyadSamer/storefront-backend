/* Replace with your SQL commands */

CREATE TABLE orders_products(

id SERIAL PRIMARY KEY,
quantity integer,

orders_id bigint REFERENCES orders(id),
products_id bigint REFERENCES products(id)



);