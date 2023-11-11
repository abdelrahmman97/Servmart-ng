import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmailchang } from 'src/app/core/models/User/AcountSting/IUserChangEmail';
import { IUserRole } from 'src/app/core/models/User/AcountSting/IRoleUserChang';
import { Changpassword } from 'src/app/core/models/User/AcountSting/IUserPassword';
import { environment } from 'src/app/core/environments/environment';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Injectable( {
	providedIn: 'root'
} )
export class AcountService {
	//  private ApiUrl='/AcountsittingControllers'
	apiUpdate=`https://localhost:7013/api/User/update`
	constructor( private Http: HttpClient, private auth: AuthService ) { }

	getData() {
		console.log( 'Fetching vendors data...' );
		const userId = this.auth.getUserValue().userID;
		return this.Http.get<any>( `${environment.apiUrl}/User/getUser?id=${userId}` );
	}
	UpdateUserInfo( UserInfo: any ) {
		return this.Http.post( `${environment.apiUrl}/User/update`, UserInfo );
	}
	UpdateEmail( Email: string[] ) {
		return this.Http.put( `${environment.apiUrl}/User/UpdateEmail`, {Email:Email,userID:""} );
	}
	UpdateROle( UserRole: string[] ) {
		console.log(UserRole);

		return this.Http.post( `${environment.apiUrl}/User/UpDateRole/`, {Role:UserRole,UserId:""} );
	}
	ChangePassWord( passwrod: Changpassword ) {
		return this.Http.put( `${environment.apiUrl}/ChangePassword/`, passwrod );
	}


}
