const request = require('supertest');
const server = require('../src/server');

describe('Server', () => {
  beforeAll(() => {
    server.listen(3039);
  });

  afterAll(() => {
    server.close();
  });

  test('GET /health', async () => {
    const res = await request(server).get('/health');
    expect(res.status).toBe(200);
  });
});