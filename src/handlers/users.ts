import type { Request, Response } from 'express-serve-static-core';
import type { CreateUserDto } from '../dtos/CreateUser.dto.ts';
import type { User } from '../types/response.ts';

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request<{ id: string }>, response: Response) {
  response.send({});
}

export function createUser(request: Request<{}, {}, CreateUserDto>, response: Response<User>) {
  response.status(201).send({
    id: 1,
    username: request.body.username,
    email: request.body.email,
  });
}
