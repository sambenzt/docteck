import { InvalidEmailException } from "../../exceptions/invalid-email-exception"

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
      this.throwException()
    }
  }

  private throwErrorIfisInvalidFormat (value: string): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(value)) {
      this.throwException()
    }
  }

  private throwException(): void {
    throw new InvalidEmailException()
  }
}
