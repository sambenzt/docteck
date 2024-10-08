import { UserMother } from "../mother/user.mother"

describe('CreatedAt Value Object', () => {
    it('should be defined if valid date', () => {
      expect(() => {
        UserMother.CreatedAt('2024-01-01 00:00:00')
      }).not.toThrow()
    })

    it('should throw error if password is date', () => {
        expect(() => UserMother.CreatedAt('')).toThrow()
    })

    it('should throw error if date is not valid format', () => {
        expect(() => UserMother.CreatedAt('01-01-2024 00:00:00')).toThrow()
        expect(() => UserMother.CreatedAt('2024/01/01 00:00:00')).toThrow()
        expect(() => UserMother.CreatedAt('2024-02-31 00:00:00')).toThrow()
    })

  })