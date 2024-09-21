export class Email {
  constructor (public readonly value: string) {
    this.validateOrThrowError(value)
  }

  private validateOrThrowError (value: string): void {
    this.throwErrorIfisEmpty(value)
    this.throwErrorIfisInvalidFormat(value)
  }

  private throwErrorIfisEmpty (value: string): void {
    if (value.length === 0) {
      throw new Error()
    }
  }

  private throwErrorIfisInvalidFormat (value: string): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(value)) {
      throw new Error()
    }
  }
}
