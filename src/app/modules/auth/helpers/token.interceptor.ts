import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/Auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor( public authService: AuthService ) { }

	intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
		if ( this.authService.isLoggedIn() ) {
			let newReq = req.clone(
				{
					setHeaders:
					{
						Authorization: `Bearer ${this.authService.getToken()}`
					}
				}
			);
			return next.handle( newReq );
		}
		return next.handle( req );
	}
}
