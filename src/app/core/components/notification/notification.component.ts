import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/Notifications/Notification.service';

@Component( {
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: [ './notification.component.css' ]
} )
export class NotificationComponent implements OnInit {

	notifications: string[] = [];

	constructor ( private notifiService: NotificationService ) { }

	ngOnInit () {
		// Subscribe to incoming notifications
		this.notifiService.getNotifications().subscribe( {
			next: ( notification ) => {
				this.notifications.push( notification );
				console.log( notification );
			},
			error: ( error ) => {
				console.log( error );
			}
		} );
	}

	// sendNotificationToAll ( message: any ) {
	// 	this.notifiService.sendNotificationToAll( message );
	// }

	// sendNotificationToUser ( userId: string, message: any ) {
	// 	// Replace 'userId' with the actual user ID
	// 	this.notifiService.sendNotificationToUser( userId, message );
	// }

}
