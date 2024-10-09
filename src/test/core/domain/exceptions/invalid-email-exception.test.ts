import { InvalidEmailException } from "../../../../core/domain/exceptions/invalid-email-exception"

describe('Invalid Email Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidEmailException).toBeInstanceOf(Error)
    })
})