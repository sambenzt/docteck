import { InvalidCreatedAtException } from "../../../../core/domain/exceptions/InvalidCreatedAtException"

describe('Invalid CreatedAt Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidCreatedAtException).toBeInstanceOf(Error)
    })
})