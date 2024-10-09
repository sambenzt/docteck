import { InvalidCreatedAtException } from "../../exceptions/invalid-created-at-exception"

export class CreatedAt {
    constructor(public readonly value: string) {
        this.throwErrorIfisEmpty(value)
        this.throwErrorIfValueIsInvalidFormat(value)
        this.throwErrorIfValueIsInvalidDate(value)
    }

    private throwErrorIfisEmpty (value: string): void {
        if (value.length === 0) {
            this.throwException()
        }
    }

    private throwErrorIfValueIsInvalidFormat(value: string): void {
        const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
        if (!regex.test(value)) {
            this.throwException()
        }
    }

    private throwErrorIfValueIsInvalidDate(value: string): void {
        const [datePart, timePart] = value.split(' ')
        const [year, month, day] = datePart.split('-').map(Number)
        const [hours, minutes, seconds] = timePart.split(':').map(Number)
        const date = new Date(year, month - 1, day, hours, minutes, seconds)
        const valid = (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day &&
          date.getHours() === hours &&
          date.getMinutes() === minutes &&
          date.getSeconds() === seconds
        )

        if(valid === false) {
            this.throwException()
        }
    }

    private throwException(): void {
        throw new InvalidCreatedAtException
    }
}