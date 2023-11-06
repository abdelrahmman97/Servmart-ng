import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/Auth.service";
import { environment } from "src/app/core/environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor( public authService: AuthService ) { }

	intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
		const user = this.authService.getUser();
		const isLoggedIn = user?.token;
		const isApiUrl = req.url.startsWith( environment.apiUrl );
		if ( isLoggedIn && isApiUrl ) {
			let newReq = req.clone(
				{
					setHeaders:
					{
						Authorization: `Bearer ${user.token}`
					}
				}
			);
			return next.handle( newReq );
		}
		return next.handle( req );
	}
}
