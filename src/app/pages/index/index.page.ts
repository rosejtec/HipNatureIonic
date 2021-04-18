import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';
import { CommonService } from '../../services/common.service';
import { ViewBookingDetailModalPage } from '../view-booking-detail-modal/view-booking-detail-modal.page';

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
    mode: 'month',
    currentDate: new Date()
  };
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(public commonService: CommonService, private myBookingService: MybookingsService, private modalCtrl: ModalController) {
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

  next() {
    console.log("next method")
    this.myCal.slideNext();
  }

  prev() {
    console.log("prev method")
    this.myCal.slidePrev();
  }

  onViewChanged(title) {
    this.viewTitle = title;
  }
  
  async selectedEvent(value) {
    let toView = this.currentBooking.find(i => i.bookingId === value["notes"])
    this.myBookingService.selectedBookingToView = toView;
    console.log(this.myBookingService.selectedBookingToView)
    let modal = await this.modalCtrl.create({
      component: ViewBookingDetailModalPage,
    });
    modal.present();
  }

  initEvent() {
    var events = [];
    this.myBookingService.retrieveMyBookings().subscribe(
      response => {
        this.currentBooking = response;
      }
    )
    setTimeout(() => {
      console.log(this.currentBooking)
      for (let i of this.currentBooking) {
        let startTimeDate = new Date(i["startTime"])
        let endTimeDate = new Date(i["endTime"])
        events.push({
          title: i["sessionName"] + ' @' + i["venue"],
          startTime: startTimeDate,
          endTime: endTimeDate,
          notes: i["bookingId"],
          allDay: false
        })
      }
      this.eventSource = events
    }, 1500);

  }

}
