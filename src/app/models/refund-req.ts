export class RefundReq {

    username: string |undefined;
    password: string |undefined;
    bookingId:number|undefined;
    reason:string|undefined;

    constructor(
        username?:string,
        password?: string,
        bookingId?:number,
        reason?: string
        ) {
          this.password = password;
          this.username = username;
          this.bookingId=bookingId;
          this.reason = reason;
        }
}

