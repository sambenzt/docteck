import { User } from '../../../../core/domain/user/user'
import { Email } from '../../../../core/domain/user/value-objects/Email'
import { Id } from '../../../../core/domain/user/value-objects/id'
import { Password } from '../../../../core/domain/user/value-objects/Password'
import { CreatedAt } from '../../../../core/domain/user/value-objects/CreatedAt'
import { UserMother } from './mother/user.mother'

describe('User Entity', () => {
  it('should be defined', () => {
    const sut: User = UserMother.User()

    expect(sut).toBeInstanceOf(User)
    expect(sut.id).toBeInstanceOf(Id)
    expect(sut.email).toBeInstanceOf(Email)
    expect(sut.password).toBeInstanceOf(Password)
    expect(sut.createdAt).toBeInstanceOf(CreatedAt)
  })
})
