import { InvalidIdException } from "../../../../core/domain/exceptions/InvalidIdException"

describe('Invalid Id Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidIdException).toBeInstanceOf(Error)
    })
})