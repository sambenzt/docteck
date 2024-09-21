import { Id } from '../../../../../core/domain/user/value-objects/id'

describe('Id Value Object', () => {
  it('should be defined', () => {
    const sut: Id = new Id('1')
    expect(sut).toBeInstanceOf(Id)
    expect(sut.value).toStrictEqual('1')
  })

  it('should throw error if id is empty', () => {
    expect(() => new Id('')).toThrow()
  })

  it('should throw error if id is not string', () => {
    expect(() => new Id(1 as any)).toThrow()
  })
})
