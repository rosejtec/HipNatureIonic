export class CreditPlan {
    creditPlanId: number|undefined;
    price: number|undefined;
    creditValue: number|undefined;
    constructor(creditPlanId?: number, price?: number, creditValue?: number){
        this.creditPlanId = creditPlanId;
        this.price = price;
        this.creditValue = creditValue;
    }
}
