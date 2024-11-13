import { InMemoryUsersRepository } from "src/repositories/in-memory/inMemoryUsers.repository";
import { beforeEach, describe, expect, it } from "vitest";
import { RegisterServiceUserCase } from "./register.service";

let usersRepositoryInMemory: InMemoryUsersRepository;
let systemUnderTest: RegisterServiceUserCase


describe('Register User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new InMemoryUsersRepository();
        systemUnderTest = new RegisterServiceUserCase(usersRepositoryInMemory);
    })

    it('should be able to register a new user', async () => {
        const {user}  = await systemUnderTest.execute({
            name: 'John Doe',
            email: 'johndoe@email.com',
            password:'123456',})

            console.log(user)

        expect(user.id).toEqual(expect.any(String));
        expect(user.name).toEqual('John Doe');
    })
})

// osdfjsai 