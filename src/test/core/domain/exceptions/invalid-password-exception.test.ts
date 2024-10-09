import { InvalidPasswordException } from "../../../../core/domain/exceptions/invalid-password-exception"

describe('Invalid Password Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidPasswordException).toBeInstanceOf(Error)
    })
})