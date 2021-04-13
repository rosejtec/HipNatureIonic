export class Creditcard {
    cardNumber: string | undefined
    cvv: string | undefined
    expiryDate: string | undefined

    constructor(
        cardNumber?: string,
        cvv?: string,
        expiryDate?: string,
      ) {
        this.cardNumber = cardNumber
        this.cvv = cvv
        this.expiryDate = expiryDate
      }
}
