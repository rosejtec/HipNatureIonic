import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class';

import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-view-all-classes',
  templateUrl: './view-all-classes.page.html',
  styleUrls: ['./view-all-classes.page.scss'],
})
export class ViewAllClassesPage implements OnInit {
  allClasses : Class[];

  constructor(private router: Router, public commonService: CommonService, public classService:ClassService, public navCtrl: NavController) { 
  }

  ngOnInit() {
    
    this.classService.retrieveAllClasses().subscribe(
      response => {
          let classes: Class[] = response;
          this.allClasses=classes
      },
      error => {
          console.log(error);
      }
  );
  }
  
  goToSessionPage(p:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          tempClass: JSON.stringify(p)
      }
    }
    this.navCtrl.navigateForward(['view-aclass-sessions'], navigationExtras);
  }

  viewClassDetails(event, p) {
    console.log(p)
    this.router.navigate(["/view-class-details/" + p.classId]);
  }
};





  

