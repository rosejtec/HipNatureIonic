export class RetrieveBookingsByCusReq {
    bookingId: number|undefined;
    sessionName: string|undefined;
    startTime: Date|undefined;
    endTime: Date|undefined;
    
    constructor(
        bookingId?: number,
        sessionName?: string,
        startTime?: Date,
        endTime?: Date
    ){
        this.bookingId = bookingId;
        this.sessionName = sessionName;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
