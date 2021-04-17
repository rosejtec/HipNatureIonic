import { Component, OnInit } from '@angular/core';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';

@Component({
  selector: 'app-view-my-bookings',
  templateUrl: './view-my-bookings.page.html',
  styleUrls: ['./view-my-bookings.page.scss'],
})
export class ViewMyBookingsPage implements OnInit {

  myBooking: RetrieveBookingsByCusReq[];
  constructor(private mybookings: MybookingsService) { }

  ngOnInit() {
    this.getMyBookings();
  }
  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      console.log(this.myBooking)
    }, 3000);
  }
  getMyBookings() {
    this.mybookings.retrieveMyBookings().subscribe(
      response => {
        this.myBooking = response;
      }
    )
  }

}
