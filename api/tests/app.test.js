const request = require('supertest');
const app     = require('../index');
 
describe('Health endpoint', () => {
  it('returns 200 and status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
//write more test here :)
