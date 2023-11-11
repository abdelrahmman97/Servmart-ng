export interface IUserProfile {
	id: string;
	fName: string;
	lName: string;
	userName: string;
	email: string;
	phoneNumber: string;
	gender: boolean;
	governorate?: any;
	city?: any;
	address: string;
	services: any[];
	products: any[];
	profilePic: string;
}
