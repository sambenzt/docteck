import { InvalidEmailException } from "../../../../core/domain/exceptions/InvalidEmailException"

describe('Invalid Email Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidEmailException).toBeInstanceOf(Error)
    })
})