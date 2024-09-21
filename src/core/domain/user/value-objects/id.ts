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
      throw new Error()
    }
  }

  private throwErrorIfisInvalidLength (value: string): void {
    if (value.length < Id.MIN_LENGTH) {
      throw new Error()
    }
  }
}
