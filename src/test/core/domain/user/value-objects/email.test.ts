import { UserMother } from '../mother/user.mother'

describe('Email Value Object', () => {
  it('should be defined if valid email', () => {
    expect(() => {
      UserMother.Email('user@example.com')
      UserMother.Email('john.doe@domain.org')
      UserMother.Email('user123@sub.domain.com')
      UserMother.Email('test+tag@example.net')
      UserMother.Email('info@my-site.com')
    }).not.toThrow()
  })

  it('should throw error if email is empty', () => {
    expect(() => UserMother.Email('')).toThrow()
  })

  it('should throw error if email is not valid format', () => {
    expect(() => UserMother.Email('user@.com')).toThrow()
    expect(() => UserMother.Email('@example.com')).toThrow()
    expect(() => UserMother.Email('user@example')).toThrow()
    expect(() => UserMother.Email('john@domain.c')).toThrow()
  })
})
