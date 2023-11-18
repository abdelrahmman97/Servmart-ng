import { NotificationType } from "../../Enums/NotificationType.enum";

export interface INotification {
	id: string;
	userId: string;
	message: string;
	isRead: boolean;
	createdAt: Date;
	type: NotificationType;
	user: any;
}
