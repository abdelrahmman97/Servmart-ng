import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers/offers.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/modules/customer/services/Request/Request.service';
import { NotificationService } from 'src/app/shared/services/Notifications/Notification.service';

@Component( {
	selector: 'app-service-provider-send-offer',
	templateUrl: './service-provider-send-offer.component.html',
	styleUrls: [ './service-provider-send-offer.component.css' ]
} )
export class ServiceProviderSendOfferComponent implements OnInit {

	constructor (
		private activeRoute: ActivatedRoute,
		private reqService: RequestService,
		private offerService: OffersService,
		private toastr: ToastrService,
		private router: Router,
		private notifiService: NotificationService
	) { }

	offerForm: FormGroup;
	request: any = null;
	isSubmitted: boolean = false;
	isLoading: boolean = false;

	ngOnInit (): void {

		this.offerForm = new FormGroup( {
			RequestId: new FormControl( '', Validators.required ),
			Details: new FormControl( '', Validators.required ),
			ExpectedSalary: new FormControl( '', Validators.required ),
			Duration: new FormControl( '', Validators.required )
		} );

		this.activeRoute.params.subscribe( {
			next: ( params ) => {
				this.isLoading = true;
				this.offerForm.get( "RequestId" ).setValue( params[ 'id' ] );
				this.reqService.getRequestById( params[ 'id' ] ).subscribe( {
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

	onFormSubmit () {
		this.isSubmitted = true;
		const formValues = this.offerForm.value;

		if ( this.offerForm.valid ) {
			console.log( this.offerForm.value );
			this.toastr.info( "جاري إضافة العرض" )

			this.offerService.create( formValues ).subscribe( {
				next: ( value ) => {
					console.log( value );
					this.toastr.success( "تم ارسال العرض بنجاح" );
					this.notifiService.sendNotificationToUser( '78221701-15cf-4763-8b7f-c63d60886130', "got offer" )
					this.router.navigate( [ '/proposals' ] );
					this.isSubmitted = false;
				},
				error: ( error ) => {
					console.log( error );
					this.isSubmitted = false;
					this.toastr.error( "الرجاء المحاولة مرة أخري" )
				}
			} );

		}

		this.isSubmitted = false
	}


}
