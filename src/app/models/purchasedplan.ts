export class Purchasedplan {
    puchasedPlanId:number|undefined;
    sessionLeft:number|undefined;

    constructor(puchasedPlanId? :number, sessionLeft? :number) {
        this.puchasedPlanId= puchasedPlanId;
        this.sessionLeft= sessionLeft;
    }

}
