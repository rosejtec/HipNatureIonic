import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-my-past-bookings',
  templateUrl: './view-my-past-bookings.page.html',
  styleUrls: ['./view-my-past-bookings.page.scss'],
})
export class ViewMyPastBookingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("View Past Booking OnInit")
  }

}
