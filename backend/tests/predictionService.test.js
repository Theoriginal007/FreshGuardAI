const request = require('supertest');
const app = require('../../app'); // Adjust the path to your Express app
const predictionService = require('../../services/predictionService'); // Adjust path to your prediction service

// Mock the prediction service
jest.mock('../../services/predictionService');

describe('Prediction Service', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // Reset mocks before each test
  });

  it('should return a prediction result successfully', async () => {
    // Mock the prediction service response
    predictionService.predict.mockResolvedValue({
      prediction: 'Positive',
      recommendations: ['Recommendation 1', 'Recommendation 2']
    });

    const response = await request(app)
      .post('/api/predict')
      .attach('file', 'path/to/sample-image.jpg') // Adjust file path as needed
      .expect(200);

    expect(response.body).toEqual({
      prediction: 'Positive',
      recommendations: ['Recommendation 1', 'Recommendation 2']
    });
  });

  it('should handle file upload errors', async () => {
    // Mock the prediction service to throw an error
    predictionService.predict.mockRejectedValue(new Error('File upload error'));

    const response = await request(app)
      .post('/api/predict')
      .attach('file', 'path/to/sample-image.jpg') // Adjust file path as needed
      .expect(500);

    expect(response.body).toEqual({ error: 'Internal Server Error' });
  });

  it('should validate the uploaded file type', async () => {
    const response = await request(app)
      .post('/api/predict')
      .attach('file', 'path/to/invalid-file.txt') // Use a non-image file
      .expect(400);

    expect(response.body).toEqual({ error: 'Invalid file type' });
  });

  it('should return a 400 status if no file is provided', async () => {
    const response = await request(app)
      .post('/api/predict')
      .expect(400);

    expect(response.body).toEqual({ error: 'No file uploaded' });
  });

  // Additional edge cases
  it('should handle unexpected errors gracefully', async () => {
    // Mock to simulate an unexpected error
    predictionService.predict.mockImplementation(() => {
      throw new Error('Unexpected error');
    });

    const response = await request(app)
      .post('/api/predict')
      .attach('file', 'path/to/sample-image.jpg')
      .expect(500);

    expect(response.body).toEqual({ error: 'Internal Server Error' });
  });
});
