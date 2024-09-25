import { Prisma, User } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { UsersRepositoyContract } from "../users.repository";

export class InMemoryUsersRepository implements UsersRepositoyContract {
    private items: User[] = [];

    async findById(id: string): Promise<User | null> {
        const user = this.items.find((item) => item.id === id);

        if (!user) {
            return null;
        }

        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.items.find((item) => item.email === email);

        if (!user) {
            return null;
        }

        return user;
    }

    async create(data: Prisma.UserCreateInput) {
        const user = {
            id: randomUUID(),
            email: data.email,
            name: data.name,
            password: data.password,
            createdAt: new Date(),
            updatedAt: new Date(),
            role: data.role
        }
        
        this.items.push(user);

        return user;
    }
}