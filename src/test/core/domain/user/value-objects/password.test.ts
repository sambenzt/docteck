import { Password } from "../../../../../core/domain/user/value-objects/Password"

describe('Password Value Object', () => {
    it('should to be defined if valid password', () => {
        expect(() => {
            new Password('@123Abcd')
        }).not.toThrow()
    })

    it('should throw error if password is empty', () => {
        expect(() => new Password('')).toThrow()
    })

    it('should throw error if password is not valid format', () => {
        expect(() => new Password('a'.repeat(Password.MIN_LENGTH - 1))).toThrow()
        expect(() => new Password('a'.repeat(Password.MAX_LENGTH + 1))).toThrow()
        expect(() => new Password('12345678')).toThrow()
        expect(() => new Password('abcdefgh')).toThrow()
        expect(() => new Password('1234abcd')).toThrow()
        expect(() => new Password('1234@abcd')).toThrow()
        expect(() => new Password('1234Aabcd5')).toThrow()
        expect(() => new Password('123@#/=?')).toThrow()
        expect(() => new Password('ABC@#/=?')).toThrow()
    })
})