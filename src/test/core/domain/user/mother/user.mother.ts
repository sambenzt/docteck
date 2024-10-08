import moment from 'moment';
import { faker } from '@faker-js/faker';
import { Id } from "../../../../../core/domain/user/value-objects/id";
import { Email } from "../../../../../core/domain/user/value-objects/Email";
import { Password } from "../../../../../core/domain/user/value-objects/Password";
import { CreatedAt } from "../../../../../core/domain/user/value-objects/CreatedAt";
import { User } from "../../../../../core/domain/user/user";

export class UserMother {

    public static Id(value?: string): Id {
        return new Id(value ?? faker.number.int({
            min: 1,
            max: 16
        }).toString())
    }

    public static Email(value?: string): Email {
        return new Email(value ?? faker.internet.email({}))
    }

    public static Password(value?: string): Password {
        return new Password(value ?? 'Abcd@12345')
    }

    public static CreatedAt(value?: string): CreatedAt {
        const date = moment(faker.date.anytime()).format('YYYY-MM-DD HH:mm:ss');
        return new CreatedAt(value ?? date)
    }

    public static User(id?: string, email?: string, password?: string, createdAt?: string): User {
        return new User(
            UserMother.Id(id),
            UserMother.Email(email),
            UserMother.Password(password),
            UserMother.CreatedAt(createdAt)
        )
    }
}