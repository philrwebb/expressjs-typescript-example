import type { Request, Response } from 'express-serve-static-core';
import { jest } from '@jest/globals';

export const mockRequest = {} as Request;

export const mockResponse = {
  send: jest.fn(),
} as unknown as Response;
