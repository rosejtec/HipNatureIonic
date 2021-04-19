export class TransactionRequest {
    transactionId: number|undefined;
    planType: String|undefined
    transactionDate: Date|undefined
    price:number|undefined
    ccNumber: String|undefined
    constructor(transactionId?: number, planType?: string, transactionDate?: Date, price?: number, ccNumber?: String){
        this.transactionDate = transactionDate
        this.transactionId = transactionId
        this.price = price
        this.planType=planType
        this.ccNumber = ccNumber;

    }
}
