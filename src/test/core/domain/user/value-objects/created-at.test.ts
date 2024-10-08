import { CreatedAt } from "../../../../../core/domain/user/value-objects/CreatedAt"

describe('CreatedAt Value Object', () => {
    it('should be defined if valid date', () => {
      expect(() => {
        new CreatedAt('2024-01-01 00:00:00')
      }).not.toThrow()
    })


    it('should throw error if password is date', () => {
        expect(() => new CreatedAt('')).toThrow()
    })

    it('should throw error if date is not valid format', () => {
        expect(() => new CreatedAt('01-01-2024 00:00:00')).toThrow()
        expect(() => new CreatedAt('2024/01/01 00:00:00')).toThrow()
        expect(() => new CreatedAt('2024-02-31 00:00:00')).toThrow()
    })

  })