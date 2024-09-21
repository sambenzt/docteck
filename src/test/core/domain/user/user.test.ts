import { User } from '../../../../core/domain/user/user'

describe('User Entity', () => {
  it('should be defined', () => {
    const sut: User = new User('1', 'test@email.com', 'password', new Date())

    expect(sut).toBeInstanceOf(User)
    expect(sut.id).toStrictEqual('1')
    expect(sut.email).toStrictEqual('test@email.com')
    expect(sut.password).toStrictEqual('password')
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
