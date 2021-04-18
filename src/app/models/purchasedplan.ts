export class Purchasedplan {
    puchasedPlanId:number|undefined;
    sessionLeft:number|undefined;
    purchaseDate:Date|undefined
    expiryDate:Date|undefined
    creditValue: number|undefined

    constructor(puchasedPlanId? :number, sessionLeft? :number, purchaseDate?:Date, expiryDate?:Date, creditValue?:number) {
        this.puchasedPlanId= puchasedPlanId;
        this.sessionLeft= sessionLeft;
        this.purchaseDate = purchaseDate;
        this.expiryDate = expiryDate
        this.creditValue = creditValue;
    }

}
