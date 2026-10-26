import { mockRequest, mockResponse } from '../../__mocks__/index.js';
import { getUsers } from '../../handlers/users.js';
describe('getUsers', () => {
    it('should return an array of users', () => {
        getUsers(mockRequest, mockResponse);
    });
});
describe('getUser', () => {
    it('should return an object', () => {
        getUsers(mockRequest, mockResponse);
    });
});
//# sourceMappingURL=users.test.js.map