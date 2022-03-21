import supertest from 'supertest';

import app from '../main/config/app';

const request = supertest(app);
const assert = require('assert');

describe('Post Endpoints', () => {
  it('gets the test endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    assert.ok(true);
  });
});
