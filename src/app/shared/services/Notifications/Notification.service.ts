import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/app/core/environments/environment';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Injectable( {
	providedIn: 'root'
} )
export class NotificationService {

	private hubConnection: HubConnection;
	private notificationSubject = new Subject<any>();

	constructor( private auth: AuthService, private httpClient: HttpClient ) {
		this.hubConnection = new HubConnectionBuilder()
			.withUrl( 'https://localhost:7013/notificationHub', {
				withCredentials: true,
				skipNegotiation: true,
				accessTokenFactory: () => auth.getToken(),
				transport: signalR.HttpTransportType.WebSockets
			} )
			.build();

		this.hubConnection
			.start()
			.then( () => {
				console.log( 'Connection started' );
				this.hubConnection.invoke( 'AddToGroup', auth.getUserValue().userID );
			} )
			.catch( ( err ) => console.log( 'Error while starting connection: ' + err ) );

		// Handle incoming notifications
		// this.hubConnection.on( 'ReceiveNotification', ( message: string ) => {
		// 	this.notificationSubject.next( message );
		// } );

	}

	// get user old notifications from databse
	getNotifications() {
		return this.httpClient.get( `${environment.apiUrl}/Notification/GetUserNotifications` );
	}

	updateNotifications() {
		return this.httpClient.get( `${environment.apiUrl}/Notification/UpdateUserNotifications` );
	}


	// Observable to subscribe to incoming notifications
	// getNotifications(): Observable<string> {
	// 	return this.notificationSubject.asObservable();
	// }

	newOfferListener( callback: ( offer: any ) => void ) {
		console.log(`init newOfferListener`);
		this.hubConnection.on( 'NewOffer', callback );
	}

	newRequestListener( callback: ( offer: any ) => void ) {
		console.log(`init newRequestListener`);
		this.hubConnection.on( 'NewRequest', callback );
	}

	newOrderListener( callback: ( offer: any ) => void ) {
		console.log(`init newOrderListener`);
		this.hubConnection.on( 'NewOrder', callback );
	}

	offerAcceptedListener( callback: ( offer: any ) => void ) {
		console.log( `init OfferAccepted` );
		this.hubConnection.on( 'OfferAccepted', callback );
	}

	offerRejectedListener( callback: ( offer: any ) => void ) {
		console.log( `init OfferRejected` );
		this.hubConnection.on( 'OfferRejected', callback );
	}

	offerCompletedListener( callback: ( offer: any ) => void ) {
		console.log( `init OfferCompleted` );
		this.hubConnection.on( 'OfferCompleted', callback );
	}
}
