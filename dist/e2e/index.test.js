import request from 'supertest';
import { createApp } from '../createApp.js';
describe('/api/users', () => {
    let app;
    beforeAll(() => {
        app = createApp();
    });
    it('should return an empty array. when getting /api/users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.body).toStrictEqual([]);
    });
});
//# sourceMappingURL=index.test.js.map