export class Creditcard {
    creditCardId: number|undefined
    cardNumber: string | undefined
    cvv: string | undefined
    expiryDate: string | undefined


    constructor(
        cardNumber?: string,
        cvv?: string,
        expiryDate?: string,
        creditCardId?: number
      ) {
        this.creditCardId = creditCardId;
        this.cardNumber = cardNumber
        this.cvv = cvv
        this.expiryDate = expiryDate
      }
}
