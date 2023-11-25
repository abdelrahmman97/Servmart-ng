import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/Notifications/Notification.service';
import { INotification } from '../../models/Notification/INotification';
import { NotificationType } from '../../Enums/NotificationType.enum';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.css']
} )
export class NotificationComponent implements OnInit {

	newNotification: boolean = false;
	notifications: INotification[] = [];
	newNotificationsCount: number = 0;

	Offer = NotificationType.Offer;
	ServiceRequest = NotificationType.ServiceRequest;
	OrderRequest = NotificationType.OrderRequest;

	constructor(
		private notifiService: NotificationService,
		private toastr: ToastrService
	) { }

	ngOnInit() {

		this.getUserNotificationsFromDB();

		this.OfferNotifications();
		this.RequestNotifications();
		this.OrderNotifications();
		this.OfferAcceptedNotifications();
		this.OfferRejectedNotifications();
		this.OfferCompletedNotifications();
	}

	getUserNotificationsFromDB() {
		this.notifiService.getNotifications().subscribe( {
			next: ( value ) => {
				let data = value as INotification[];
				data.forEach( element => {
					if ( element.isRead == false ) {
						this.newNotification = true;
						this.newNotificationsCount += 1;
					}
				} );
				this.notifications = value as INotification[];
			},
			error: ( value ) => {
				console.log( "notif error: ", value );
			}
		} );
	}

	OfferNotifications() {
		this.notifiService.newOfferListener( ( data ) => {
			const notification = data as INotification;
			this.updateNotifications( notification );
			this.toastr.info( "لديك عرض جديد", `الاشعارات`, { toastClass: 'info-toast-custom ngx-toastr' } )
		} );
	}

	RequestNotifications() {
		this.notifiService.newRequestListener( ( data ) => {
			const notification = data as INotification;
			this.updateNotifications( notification );
			this.toastr.info( "لديك طلب جديد", `الاشعارات`, { toastClass: 'info-toast-custom ngx-toastr' } )
		} );
	}

	OrderNotifications() {
		this.notifiService.newOrderListener( ( data ) => {
			const notification = data as INotification;
			this.updateNotifications( notification );
			this.toastr.info( "لديك طلب جديد", `الاشعارات`, { toastClass: 'info-toast-custom ngx-toastr' } )
		} );
	}

	OfferAcceptedNotifications() {
		this.notifiService.offerAcceptedListener( ( data ) => {
			const notification = data as INotification;
			this.updateNotifications( notification );
			this.toastr.info( "لقد تم قبول عرضك", `الاشعارات`, { toastClass: 'info-toast-custom ngx-toastr' } )
		} );
	}

	OfferRejectedNotifications() {
		this.notifiService.offerRejectedListener( ( data ) => {
			const notification = data as INotification;
			this.updateNotifications( notification );
			this.toastr.info( "لقد تم رفض عرضك", `الاشعارات`, { toastClass: 'info-toast-custom ngx-toastr' } )
		} );
	}

	OfferCompletedNotifications() {
		this.notifiService.offerCompletedListener( ( data ) => {
			const notification = data as INotification;
			this.updateNotifications( notification );
			this.toastr.info( "لقد تم اكمال طلبك", `الاشعارات`, { toastClass: 'info-toast-custom ngx-toastr' } )
		} );
	}

	updateNotifications( notification: INotification ) {
		this.newNotification = true;
		this.newNotificationsCount += 1;
		this.notifications.unshift( notification );
	}

	setAsRead( id: string ) {
		const index = this.notifications.findIndex( notif => notif.id === id );
		this.notifications[index].isRead = true;
		console.log( `updated as read` );
	}

	setAllAsRead() {
		this.newNotification = false;
		this.notifiService.updateNotifications().subscribe( {
			next: ( value ) => {
				this.notifications.forEach( item => {
					item.isRead = true;
				} );
				this.newNotificationsCount = 0;
			},
			error: ( error ) => {
				console.log( `setAllAsRead: `, error );
			}
		} );
	}

}
