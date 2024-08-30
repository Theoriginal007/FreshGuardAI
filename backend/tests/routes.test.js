const request = require('supertest');
const app = require('../../app'); // Adjust the path to your Express app

describe('API Routes', () => {
  it('should return a 404 for unknown routes', async () => {
    const response = await request(app)
      .get('/unknown-route')
      .expect(404);

    expect(response.body.message).toBe('Not Found');
  });

  it('should handle the POST /api/predict route successfully', async () => {
    const response = await request(app)
      .post('/api/predict')
      .attach('file', 'path/to/sample-image.jpg') // Adjust file path as needed
      .expect(200);

    expect(response.body).toHaveProperty('prediction');
    expect(response.body).toHaveProperty('recommendations');
    expect(response.body.prediction).toBeDefined();
    expect(Array.isArray(response.body.recommendations)).toBe(true);
  });

  it('should handle missing file error in POST /api/predict', async () => {
    const response = await request(app)
      .post('/api/predict')
      .expect(400);

    expect(response.body.error).toBe('No file uploaded');
  });

  it('should validate the file type on POST /api/predict', async () => {
    const response = await request(app)
      .post('/api/predict')
      .attach('file', 'path/to/invalid-file.txt') // Use a non-image file
      .expect(400);

    expect(response.body.error).toBe('Invalid file type');
  });

  // Additional route tests
  it('should return a 200 status for a successful GET request', async () => {
    const response = await request(app)
      .get('/api/status')
      .expect(200);

    expect(response.body).toEqual({ status: 'OK' });
  });

  it('should return a 500 status for a server error', async () => {
    // Mock an endpoint to throw an error
    jest.spyOn(app, 'get').mockImplementation(() => {
      throw new Error('Server Error');
    });

    const response = await request(app)
      .get('/api/error')
      .expect(500);

    expect(response.body.error).toBe('Internal Server Error');
  });
});
