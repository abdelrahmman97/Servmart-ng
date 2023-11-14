import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/app/core/environments/environment';

@Injectable( {
	providedIn: 'root'
} )
export class NotificationService {

	private hubConnection: HubConnection;
	private notificationSubject = new Subject<string>();

	constructor () {
		this.hubConnection = new HubConnectionBuilder()
			.withUrl( 'https://localhost:7013/notificationHub', { withCredentials: true } )
			.build();
		// Handle incoming notifications
		this.hubConnection.on( 'ReceiveNotification', ( message: string ) => {
			console.log( message );
			this.notificationSubject.next( message );
		} );

		// Start the SignalR connection
		this.startConnection();
	}


	private async startConnection () {
		try {
			await this.hubConnection.start();
			console.log( 'SignalR connection started' );
		} catch ( err ) {
			console.error( 'Error while starting SignalR connection: ', err );
			// Retry connection after 5 seconds
			setTimeout( () => this.startConnection(), 5000 );
		}
	}

	// Method to send a notification to all clients
	sendNotificationToAll ( message: string ) {
		this.hubConnection.invoke( 'SendNotificationToAll', message );
	}

	// Method to send a notification to a specific user
	sendNotificationToUser ( userId: string, message: string ) {
		this.hubConnection.invoke( 'SendNotificationToUser', userId, message );
	}

	// Observable to subscribe to incoming notifications
	getNotifications (): Observable<string> {
		return this.notificationSubject.asObservable();
	}

}
