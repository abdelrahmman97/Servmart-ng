import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserInfo } from 'src/app/core/models/User/AcountSting/IUserInfo';
import { IEmailchang } from 'src/app/core/models/User/AcountSting/IUserChangEmail';
import { IUserRole } from 'src/app/core/models/User/AcountSting/IRoleUserChang';
import { Changpassword } from 'src/app/core/models/User/AcountSting/IUserPassword';
@Injectable({
  providedIn: 'root'
})
export class AcountservicesService {
 private ApiUrl='https://localhost:7013/api'
  constructor( private Http:HttpClient) {

   }
   UpdateUserInfo(UserInfo: IUserInfo){
	return this.Http.post(`${this.ApiUrl}/update`, UserInfo);
   }
    UpdateEmail(Email:IEmailchang){
		return this.Http.put(`${this.ApiUrl}/ChangeEmail`, Email);
	}
	 UpdateROle(UserRole:IUserRole)
	{
		return this.Http.put(`${this.ApiUrl}/ChangeRoles`, UserRole);
	}
	ChangePassWord(passwrod:Changpassword){
		return this.Http.put(`${this.ApiUrl}/ChangePassword`, passwrod);
	}


}
