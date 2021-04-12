import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/models/class';
import { SessionEntity } from 'src/app/models/session-entity';
import {SessionentityService} from '../../services/sessionentity.service';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-view-aclass-sessions',
  templateUrl: './view-aclass-sessions.page.html',
  styleUrls: ['./view-aclass-sessions.page.scss'],
})
export class ViewAClassSessionsPage implements OnInit {
  tempClass : Class
  classId: number;
  sessionList : SessionEntity[];
  constructor(private router: Router, private sessionentityService:SessionentityService, private activatedRoute: ActivatedRoute,private classService: ClassService) { }
  
  ngOnInit() {
      this.classId = parseInt(this.activatedRoute.snapshot.paramMap.get('classId'));
      this.refreshClass();
      this.refreshSessions();
      console.log('Finish ngOnInit for view-aclass-session')
    }

  refreshSessions(){
    console.log('At refreshSessions1')
    this.sessionentityService.getSessionsList(this.classId).subscribe(
      response => {
        let sess: SessionEntity[] = response;
        this.sessionList = sess;
        console.log(this.sessionList)
        console.log('At refreshSessions')},
    error => {console.log('View A Class Session Page typescript: ' + error);}
    );
  }
  
  refreshClass() {
    this.classService.getClassByClassId(this.classId).subscribe(
      response => {
        this.tempClass = response;
        console.log('At View-aclass-sessions page')
      },
      error => {
        console.log('********** ViewClassDetailsPage.ts: ' + error);
      }
    );

  }
  back() {
    this.router.navigate(["/view-all-classes"]);
  }
}
