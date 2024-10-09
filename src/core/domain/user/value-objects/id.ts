import { InvalidIdException } from "../../exceptions/invalid-Id-exception"

export class Id {
  public static MIN_LENGTH = 1

  constructor (public readonly value: string) {
    this.validateOrThrowError(value)
  }

  private validateOrThrowError (value: string): void {
    this.throwErrorIfisInvalidType(value)
    this.throwErrorIfisInvalidLength(value)
  }

  private throwErrorIfisInvalidType (value: any): void {
    if (typeof value !== 'string') {
      this.throwException()
    }
  }

  private throwErrorIfisInvalidLength (value: string): void {
    if (value.length < Id.MIN_LENGTH) {
      this.throwException()
    }
  }

  private throwException(): void {
    throw new InvalidIdException()
  }

}
