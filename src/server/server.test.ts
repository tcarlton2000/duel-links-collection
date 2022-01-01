import request, { Response } from 'supertest';
import { connectDB } from './database';
import app from './server';

describe('Test the root path', () => {
  beforeAll(async () => {
    await connectDB();
  });

  test('It should return "Duel Links Collection"', async () => {
    const response: Response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Duel Links Collection');
  });
});
