import type { Request, Response } from 'express-serve-static-core';
import type { CreateUserDto } from '../dtos/CreateUser.dto.ts';
import type { User } from '../types/response.ts';
export declare function getUsers(request: Request, response: Response): void;
export declare function getUserById(request: Request<{
    id: string;
}>, response: Response): void;
export declare function createUser(request: Request<{}, {}, CreateUserDto>, response: Response<User>): void;
//# sourceMappingURL=users.d.ts.map