import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/modules/customer/services/Request/Request.service';

@Component( {
	selector: 'app-request-derails',
	templateUrl: './request-derails.component.html',
	styleUrls: ['./request-derails.component.css']
} )
export class RequestDerailsComponent implements OnInit {

	constructor(
		private activeRoute: ActivatedRoute,
		private reqService: RequestService
	) { }

	requestId: string = "";
	request: any = null;
	isLoading: boolean = false;

	ngOnInit() {

		this.activeRoute.params.subscribe( {
			next: ( params ) => {
				this.isLoading = true;
				this.requestId = params['id'];
				this.reqService.getRequestById( this.requestId ).subscribe( {
					next: ( data ) => {
						this.request = data as any;
						this.isLoading = false;
						console.log( "🚀 ~ request data:", data )
					},
					error: ( error ) => {
						this.isLoading = false;
						console.log( "🚀 ~ request error:", error )
					}
				} );
			},
			error: ( error ) => {
				this.isLoading = false;
				console.log( "🚀 ~ param errro:", error )
			}
		} );
	}

	isVideo( url: string ): boolean {
		const parts = url.split( '.' );
		const fileExtension = parts[parts.length - 1];
		const videoExtensions = ['mp4'];
		return videoExtensions.includes( fileExtension.toLowerCase() );
	}

}
