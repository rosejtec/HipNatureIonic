export class Plan {

    planId:number|undefined;
    price:number|undefined;
    creditValue:number|undefined;
    planName:string|undefined;
    sessionLimit:number|undefined;
    
    constructor(planId? :number, price?: number,creditValue?:number,planName?:string,sessionLimit? :number) {
        this.planId= planId;
        this.price= price;
        this.creditValue= creditValue;
        this.planName=planName;
        this.sessionLimit= sessionLimit;
    }
}
