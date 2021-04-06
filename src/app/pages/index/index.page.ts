import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

	constructor(public commonService: CommonService) {
    console.log(commonService.getIsLogin())
  }

  ngOnInit() {
  }

}
