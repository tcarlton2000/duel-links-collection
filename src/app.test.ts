import request, { Response } from 'supertest';
import app from './app';

describe('Test the root path', () => {
  test('It should return "Duel Links Collection"', async () => {
    const response: Response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Duel Links Collection');
  });
});
