import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Class } from 'src/app/models/class';

@Component({
  selector: 'app-view-aclass-sessions',
  templateUrl: './view-aclass-sessions.page.html',
  styleUrls: ['./view-aclass-sessions.page.scss'],
})
export class ViewAClassSessionsPage implements OnInit {
  tempClass : Class
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      this.tempClass = JSON.parse(params["tempClass"]);
      });
      console.log(this.tempClass.className);
    } 

}
