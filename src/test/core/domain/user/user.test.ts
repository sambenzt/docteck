import { User } from '../../../../core/domain/user/user'
import { Email } from '../../../../core/domain/user/value-objects/Email'
import { Id } from '../../../../core/domain/user/value-objects/id'
import { Password } from '../../../../core/domain/user/value-objects/Password'

describe('User Entity', () => {
  it('should be defined', () => {
    const id: Id = new Id('1')
    const email:Email = new Email('email@email.com')
    const password: Password = new Password('Abcd@12345')

    const sut: User = new User(id, email, password, new Date())

    expect(sut).toBeInstanceOf(User)
    expect(sut.id).toBeInstanceOf(Id)
    expect(sut.email).toBeInstanceOf(Email)
    expect(sut.password).toBeInstanceOf(Password)
    // expect(sut.createdAt.value).toBeInstanceOf(Date)
  })
})
