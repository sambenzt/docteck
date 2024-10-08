import { Password } from "../../../../../core/domain/user/value-objects/Password"
import { UserMother } from "../mother/user.mother"

describe('Password Value Object', () => {
    it('should to be defined if valid password', () => {
        expect(() => {
            UserMother.Password('@123Abcd')
        }).not.toThrow()
    })

    it('should throw error if password is empty', () => {
        expect(() => UserMother.Password('')).toThrow()
    })

    it('should throw error if password is not valid format', () => {
        expect(() => UserMother.Password('a'.repeat(Password.MIN_LENGTH - 1))).toThrow()
        expect(() => UserMother.Password('a'.repeat(Password.MAX_LENGTH + 1))).toThrow()
        expect(() => UserMother.Password('12345678')).toThrow()
        expect(() => UserMother.Password('abcdefgh')).toThrow()
        expect(() => UserMother.Password('1234abcd')).toThrow()
        expect(() => UserMother.Password('1234@abcd')).toThrow()
        expect(() => UserMother.Password('1234Aabcd5')).toThrow()
        expect(() => UserMother.Password('123@#/=?')).toThrow()
        expect(() => UserMother.Password('ABC@#/=?')).toThrow()
    })
})