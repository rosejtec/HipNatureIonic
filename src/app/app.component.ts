import { IndexPage } from './pages/index/index.page';
import { IndexPageModule } from './pages/index/index.module';
import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPagesLogin = [
	{ title: 'Home', url: '/index', icon: 'home' },
	{ title: 'Logout', url: '/login', icon: 'exit' }

	];

	public appPagesLogout = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' }
	];

	public appPagesMyInformation = [
		{
			title: 'View My Booking',
			url: "",
			icon: 'add-circle'
		},
		{
			title: 'View My Profile',
			url: "",
			icon: 'add-circle'
		}
	]

	constructor(public commonService: CommonService) {
    console.log(commonService.getIsLogin())

	}


	ngOnChanges() {
		
	}
}
