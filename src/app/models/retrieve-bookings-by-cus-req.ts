export class RetrieveBookingsByCusReq {
    bookingId: number|undefined;
    sessionName: string|undefined;
    startTime: Date|undefined;
    endTime: Date|undefined;
    phone: string|undefined;
    instructor: string|undefined;
    venue: string|undefined;
    purchaseplanId: number|undefined;
    expiryDate: Date|undefined;
    bookingDate: Date|undefined;
    
    constructor(
        bookingId?: number,
        sessionName?: string,
        startTime?: Date,
        endTime?: Date,
        phone?: string,
        instructor?: string,
        venue?: string,
        purchaseplanId?:number,
        expiryDate?:Date,
        bookingDate?:Date
    ){
        this.bookingId = bookingId;
        this.sessionName = sessionName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.phone = phone;
        this.instructor = instructor;
        this.venue = venue;
        this.purchaseplanId = purchaseplanId;
        this.expiryDate = expiryDate;
        this.bookingDate = bookingDate;
    }
}
