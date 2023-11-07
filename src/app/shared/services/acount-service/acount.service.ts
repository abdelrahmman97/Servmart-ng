import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserInfo } from 'src/app/core/models/User/AcountSting/IUserInfo';
import { IEmailchang } from 'src/app/core/models/User/AcountSting/IUserChangEmail';
import { IUserRole } from 'src/app/core/models/User/AcountSting/IRoleUserChang';
import { Changpassword } from 'src/app/core/models/User/AcountSting/IUserPassword';
import { Observable } from 'rxjs';
import { environment } from 'src/app/core/environments/environment';
import { IUser } from 'src/app/core/models/IUser';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
@Injectable({
	providedIn: 'root'
})
export class AcountService {
	//  private ApiUrl='https://localhost:7013/api/AcountsittingControllers'
	constructor(private Http: HttpClient, private auth: AuthService) {

	}
	getData() {
		console.log('Fetching vendors data...');
		// const userId = this.auth.getUser().userID;
		return this.Http.get<any>(`${environment.apiUrl}/AcountsittingControllers/getUser?id=`);
	}
	UpdateUserInfo(UserInfo: any) {
		return this.Http.post(`${environment.apiUrl}/AcountsittingControllers/update`, UserInfo);
	}
	UpdateEmail(Email: IEmailchang) {
		return this.Http.put(`${environment.apiUrl}/ChangeEmail/`, Email);
	}
	UpdateROle(UserRole: IUserRole) {
		return this.Http.put(`${environment.apiUrl}/ChangeRoles/`, UserRole);
	}
	ChangePassWord(passwrod: Changpassword) {
		return this.Http.put(`${environment.apiUrl}/ChangePassword/`, passwrod);
	}


}
