import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userid: 1,
                username: "ashaswamy",
                password: "test@123"
            },
            {
                userid: 2,
                username: "vivek",
                password: "changeme"
            },
            {
                userid: 3,
                username: "sultan",
                password: "dontchangeme"
            }
        ]
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
