import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class';

import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { LocationTypeEnum } from '../../models/location-type-enum.enum';
@Component({
  selector: 'app-view-all-classes',
  templateUrl: './view-all-classes.page.html',
  styleUrls: ['./view-all-classes.page.scss'],
})
export class ViewAllClassesPage implements OnInit {
  backupAllClasses : Class[];
  filterClass:Class[];
  searchTerm:string;
  locationTypeEnum:Object[]
  constructor(private router: Router, public commonService: CommonService, public classService:ClassService, public navCtrl: NavController) { 
  this.locationTypeEnum= Object.values(LocationTypeEnum);

  }

  ngOnInit() {
    
    this.classService.retrieveAllClasses().subscribe(
      response => {
          let classes: Class[] = response;
          for (let i = 0; i < classes.length; i++) {
          
            this.classService.getPartnerByClass(classes[i].classId).subscribe(
              (response) => {
                classes[i].partner =  response
                console.log(  classes[i].partner)
              },
              (error) => {
                console.log('********** ViewClassPartnerPage.ts: ' + error)
              },
            );
          }
          this.backupAllClasses=classes
          this.filterClass = classes

      },
      error => {
          console.log(error);
      }
  );
  }

   

  async filterList(evt) {
    this.filterClass = this.backupAllClasses;
  
    if (!this.searchTerm) {
      const searchTerm = evt.srcElement.value;
      if (!searchTerm) {
              return;
      } else{
        this.filterClass = this.filterClass.filter(currentClass=> {
          if (currentClass.className && searchTerm) {
            return ((String(currentClass.locationTypeEnum).toLowerCase().startsWith(searchTerm.toLowerCase())));
          }
        });
      }
    }
    
  
    this.filterClass = this.filterClass.filter(currentClass=> {
      if (currentClass.className && this.searchTerm) {
        return (currentClass.className.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1|| (String(currentClass.locationTypeEnum).toLowerCase().startsWith(this.searchTerm.toLowerCase())));
      }
    });
  }

  viewSessionsDetails(event,p){
    console.log(p)
    this.router.navigate(["/view-aclass-sessions/" + p.classId]);
  }
  viewClassDetails(event, p) {
    console.log(p)
    this.router.navigate(["/view-class-details/" + p.classId]);
  }
  back() {
    this.router.navigate(["/view-all-classes"]);
  }
};





  

