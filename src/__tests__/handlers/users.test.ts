import { mockRequest, mockResponse } from '../../__mocks__/index.ts';
import { getUsers } from '../../handlers/users.ts';

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
