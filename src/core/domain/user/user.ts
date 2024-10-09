import { Id } from "./value-objects/id"
import { Email } from "./value-objects/Email"
import { Password } from "./value-objects/Password"
import { CreatedAt } from "./value-objects/CreatedAt"

export class User {
  constructor (
    public readonly id: Id,
    public readonly email: Email,
    public readonly password: Password,
    public readonly createdAt: CreatedAt
  ) {}
}
