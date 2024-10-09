import { InvalidNameException } from "../../../../core/domain/exceptions/InvalidNameException"

describe('Invalid Name Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidNameException).toBeInstanceOf(Error)
    })
})