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

	

	constructor(public commonService: CommonService) {
    console.log(commonService.getIsLogin())

	}


	ngOnChanges() {
		
	}
}
