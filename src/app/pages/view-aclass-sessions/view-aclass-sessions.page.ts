import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Class } from 'src/app/models/class';
import { SessionEntity } from 'src/app/models/session-entity';
import {SessionentityService} from '../../services/sessionentity.service';

@Component({
  selector: 'app-view-aclass-sessions',
  templateUrl: './view-aclass-sessions.page.html',
  styleUrls: ['./view-aclass-sessions.page.scss'],
})
export class ViewAClassSessionsPage implements OnInit {
  tempClass : Class
  sessionList : SessionEntity[];
  constructor(private route: ActivatedRoute, private sessionentityService:SessionentityService) { }
  
  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      this.tempClass = JSON.parse(params["tempClass"]);
      });
      console.log(this.tempClass.locationTypeEnum);
      this.refreshSessions();
    }
    
  refreshSessions(){
    this.sessionentityService.getSessionsList(this.tempClass.classId).subscribe(
      response => {this.sessionList = response;},
    error => {console.log('View A Class Session Page typescript: ' + error);}
    );
    console.log(this.sessionList);
  }

}
