import { Email } from '../../../../../core/domain/user/value-objects/Email'

describe('Email Value Object', () => {
  it('should be defined if valid email', () => {
    expect(() => {
      new Email('user@example.com')
      new Email('john.doe@domain.org')
      new Email('user123@sub.domain.com')
      new Email('test+tag@example.net')
      new Email('info@my-site.com')
    }).not.toThrow()
  })

  it('should throw error if email is empty', () => {
    expect(() => new Email('')).toThrow()
  })

  it('should throw error if email is not valid format', () => {
    expect(() => new Email('user@.com')).toThrow()
    expect(() => new Email('@example.com')).toThrow()
    expect(() => new Email('user@example')).toThrow()
    expect(() => new Email('john@domain.c')).toThrow()
  })
})
