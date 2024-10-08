import { Email } from "./value-objects/Email";
import { Id } from "./value-objects/id";
import { Password } from "./value-objects/Password";

export class User {
  constructor (
    public readonly id: Id,
    public readonly email: Email,
    public readonly password: Password,
    public readonly createdAt: any
  ) {}
}
