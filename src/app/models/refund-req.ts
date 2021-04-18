export class RefundReq {

    username: string |undefined;
    password: string |undefined;
    bookingId:number|undefined;

    constructor(
        username?:string,
        password?: string,
        bookingId?:number,
        ) {
          this.password = password;
          this.username = username;
          this.bookingId=bookingId;
        }
}

