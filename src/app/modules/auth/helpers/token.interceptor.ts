import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/Auth.service";
import { environment } from "src/app/core/environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor( public authService: AuthService ) { }

	intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
		const isLoggedIn =this.authService.getToken();
		
		// const isApiUrl = req.url.startsWith( environment.apiUrl );
		if ( isLoggedIn ) {
			let newReq = req.clone(
				{
					setHeaders:
					{
						Authorization: `Bearer ${isLoggedIn}`
					}
				}
			);
			console.log(req.headers)
			console.log(newReq.headers)
			return next.handle( newReq );
		}
		return next.handle( req );
	}
}
