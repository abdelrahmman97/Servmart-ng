import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from './services/service.service';
import { RequestOrdersComponent } from './Components/requestOrders/requestOrders.component';
import { AddWorkHistoryComponent } from './Components/add-work-history/add-work-history.component';
import { ServiceProviderSendOfferComponent } from './Components/service-provider-send-offer/service-provider-send-offer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ServicesListComponent } from './Components/services-list/services-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RequestOrderDetailsComponent } from './Components/request-order-details/request-order-details.component';
import { ProposalsComponent } from './Components/proposals/proposals.component';
import { ProposalsListComponent } from './Components/proposals/components/proposals-list/proposals-list.component';




@NgModule( {
	declarations: [
		AddWorkHistoryComponent,
		ServiceProviderSendOfferComponent,
		RequestOrdersComponent,
		RequestOrderDetailsComponent,
		ServicesListComponent,
		// Proposals components ---------------------
		ProposalsComponent,
		ProposalsListComponent
		// ------------------------------------------
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		RouterModule,
		SharedModule,
		ReactiveFormsModule,
		NgxPaginationModule,

		CoreModule
	],
	providers: [ ServiceService ],
} )
export class ServicesProviderModule { }
