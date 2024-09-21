import { Email } from '../../../../../core/domain/user/value-objects/Email'

describe('Email Value Object', () => {
  it('should be defined if valid email', () => {
    expect(() => {
      new Email('usuario@ejemplo.com')
      new Email('nombre.apellido@dominio.org')
      new Email('usuario123@sub.dominio.com')
      new Email('prueba+tag@ejemplo.net')
      new Email('info@mi-sitio.com')
    }).not.toThrow()
  })

  it('should throw error if email is empty', () => {
    expect(() => new Email('')).toThrow()
  })

  it('should throw error if email is not valid format', () => {
    expect(() => new Email('usuario@.com')).toThrow()
    expect(() => new Email('@ejemplo.com')).toThrow()
    expect(() => new Email('usuario@ejemplo')).toThrow()
    expect(() => new Email('nombre@dominio.c')).toThrow()
  })
})
