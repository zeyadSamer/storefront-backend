/* Replace with your SQL commands */

CREATE TABLE orders(id SERIAL PRIMARY KEY , quantity INTEGER , activeStatus VARCHAR(50),

users_id bigint REFERENCES users(id)
 );