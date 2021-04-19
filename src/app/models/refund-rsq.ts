import { RetrieveBookingsByCusReq } from "./retrieve-bookings-by-cus-req";

export class RefundRsq {

    refundId: number|undefined;
    refundDate: Date|undefined;
    bookingRefunded: RetrieveBookingsByCusReq|undefined;
    refundValue: number|undefined;
    reason: String|undefined

    constructor(refundId?: number, refundDate?: Date, bookingRefunded?:RetrieveBookingsByCusReq, refundValue?: number, reason?: String){
        this.refundId = refundId;
        this.refundDate = refundDate;
        this.bookingRefunded = bookingRefunded;
        this.refundValue = refundValue;
        this.reason = reason;
    }


}
