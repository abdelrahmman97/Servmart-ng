export interface IServiceRate {
	ID?: string;
	ServiceID: string;
	UserID: string;
	Message: string;
	NominateToOthers: number;
	WorkQuality: number;
	RespectDeliveryTime: number;
}
