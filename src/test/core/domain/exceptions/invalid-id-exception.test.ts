import { InvalidIdException } from "../../../../core/domain/exceptions/invalid-Id-exception"

describe('Invalid Id Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidIdException).toBeInstanceOf(Error)
    })
})