import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  eventSource = [];
  currentBooking: RetrieveBookingsByCusReq[];
  viewTitle: String;
  calendar = {
    mode:'month',
    currentDate: new Date()
  };
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

	constructor(public commonService: CommonService, private myBookingService: MybookingsService) {
    this.currentBooking = null
    this.initEvent()
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      console.log(this.currentBooking)
    }, 3000);
  }

  next(){
    console.log("next method")
    this.myCal.slideNext();
  }

  prev(){
    console.log("prev method")
    this.myCal.slidePrev();
  }

  onViewChanged(title){
    this.viewTitle = title;
  }

  initEvent(){
    var events = [];
    this.myBookingService.retrieveMyBookings().subscribe(
      response => {
        this.currentBooking = response;
      }
    )
    setTimeout(() => {
      console.log(this.currentBooking)
      for (let i of this.currentBooking){
        let startTimeDate = new Date(i["startTime"])
        let endTimeDate = new Date(i["endTime"])
        events.push({
          title: i["sessionName"] + ' @' + i["venue"],
          startTime: startTimeDate,
          endTime: endTimeDate,
          allDay:false
        })
      }
      this.eventSource = events
    }, 1500);

  }

}
