import supertest from 'supertest';
import app from '../server'

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the products endpoint', async (done) => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
        done();
    });



    it('gets the products:id endpoint', async (done) => {
        const response = await request.get('/products1');
        expect(response.status).toBe(200);
        done();
    });


    it('posts the products:id endpoint', async (done) => {
        const response = await request.post('/products1');
        expect(response.status).toBe(200);
        done();
    });

    

    it('gets the users endpoint', async (done) => {
        const response = await request.get('/users');
        expect(response.status).toBe(200);
        done();
    });


    it('get the users:id endpoint', async (done) => {
        const response = await request.get('/users1');
        expect(response.status).toBe(200);
        done();
    });
    it('post the users endpoint', async (done) => {
        const response = await request.post('/users2');
        expect(response.status).toBe(200);
        done();
    });
     it('post the users/authenticate endpoint', async (done) => {
        const response = await request.post('/users/authenticate');
        expect(response.status).toBe(200);
        done();
    });
   

    it('post the /orders:id endpoint', async (done) => {
        const response = await request.post('/orders1');
        expect(response.status).toBe(200);
        done();
    });

    it('post the /orders/:id/products endpoint', async (done) => {
        const response = await request.post('/orders/1/products');
        expect(response.status).toBe(200);
        done();
    });

    it('get the /orders/:id endpoint', async (done) => {
        const response = await request.get('/orders/1');
        expect(response.status).toBe(200);
        done();
    });





});
