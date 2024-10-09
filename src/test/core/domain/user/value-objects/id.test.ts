import { InvalidIdException } from '../../../../../core/domain/exceptions/invalid-Id-exception'
import { Id } from '../../../../../core/domain/user/value-objects/id'
import { UserMother } from '../mother/user.mother'

describe('Id Value Object', () => {
  it('should be defined', () => {
    const sut: Id = UserMother.Id('1')
    expect(sut.value).toStrictEqual('1')
  })

  it('should throw error if id is empty', () => {
    expect(() => UserMother.Id('')).toThrow(InvalidIdException)
  })

  it('should throw error if id is not string', () => {
    expect(() => UserMother.Id(1 as any)).toThrow(InvalidIdException)
  })
})
