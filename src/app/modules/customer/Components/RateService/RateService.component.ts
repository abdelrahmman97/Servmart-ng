import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RateService } from '../../services/rate/rate.service';
import { IServiceRate } from 'src/app/core/models/Rate/IServiceRate';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component( {
	selector: 'app-RateService',
	templateUrl: './RateService.component.html',
	styleUrls: [ './RateService.component.css' ]
} )
export class RateServiceComponent implements OnInit {

	@Input() nominateToOthers: number = 0;
	@Input() workQuality: number = 0;
	@Input() respectDeliveryTime: number = 0;

	constructor (
		private toastr: ToastrService,
		private activeRoute: ActivatedRoute,
		private rateService: RateService
	) { }

	rate: IServiceRate;
	rateForm: FormGroup;

	ngOnInit (): void {
		this.rateForm = new FormGroup( {
			serviceID: new FormControl( '' ),
			message: new FormControl( '', Validators.required ),
			nominateToOthers: new FormControl( this.nominateToOthers, Validators.required ),
			workQuality: new FormControl( this.workQuality, Validators.required ),
			respectDeliveryTime: new FormControl( this.respectDeliveryTime, Validators.required ),
		} );

		this.activeRoute.params.subscribe( {
			next: ( params ) => {
				this.rateForm.get( "serviceID" ).setValue( params[ 'id' ] );
			},
			error: ( error ) => {
				console.log( "🚀 ~ param errro:", error )
			}
		} );
	}

	nominateToOthersChanged ( value: any ) {
		this.nominateToOthers = value * 2;
	}
	workQualityChanged ( value: any ) {
		this.workQuality = value * 2;
	}
	respectDeliveryTimeChanged ( value: any ) {
		this.respectDeliveryTime = value * 2;
	}

	submitForm () {
		this.rateService.rateService( this.rateForm ).subscribe( {
			next: ( value ) => {
				console.log( "rate next: ", value );
			},
			error: ( err ) => {
				console.log( "rate error: ", err );
			},
		} );
	}

}
