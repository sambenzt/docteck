import { Password } from "../../../../../core/domain/user/value-objects/Password"
import { UserMother } from "../mother/user.mother"

describe('Password Value Object', () => {
    it('should to be defined if valid password', () => {
        expect(() => {
            UserMother.Password()
        }).not.toThrow()
    })

    it('should throw error if password is empty', () => {
        expect(() => UserMother.Password('')).toThrow()
    })

    it('should throw error if password is too short', () => {
        expect(() => UserMother.Password('a'.repeat(Password.MIN_LENGTH - 1))).toThrow()
    })
})