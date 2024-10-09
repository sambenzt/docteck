import { InvalidCreatedAtException } from "../../../../core/domain/exceptions/invalid-created-at-exception"

describe('Invalid CreatedAt Exception', () => {
    it('should be an Error Instance', () => {
        expect(new InvalidCreatedAtException).toBeInstanceOf(Error)
    })
})