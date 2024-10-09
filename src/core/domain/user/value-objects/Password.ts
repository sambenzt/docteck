
export class Password 
{
    public static MIN_LENGTH = 8
    public static MAX_LENGTH = 100

    constructor(public readonly value: string) {
        this.throwErrorIfisEmpty(value)
        this.throwErrorIfLengthIsLessThanMinimumLength(value)
        this.throwErrorIfLengthIsGreatherThanMaximumLength(value)
    }

    private throwErrorIfisEmpty (value: string): void {
        if (value.length === 0) {
          throw new Error()
        }
    }

    private throwErrorIfLengthIsLessThanMinimumLength(value: string): void {
        if(value.length < Password.MIN_LENGTH) {
            throw new Error()
        }
    }

    private throwErrorIfLengthIsGreatherThanMaximumLength(value: string): void {
        if(value.length > Password.MAX_LENGTH) {
            throw new Error()
        }
    }
}