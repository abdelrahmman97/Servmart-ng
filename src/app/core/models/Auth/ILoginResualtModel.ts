export interface ILoginResualtModel {
	token: string;
	expiresOn: string;
	role: string[];
	userName: string;
	profilePic: string;
	email?: any;
	fName: string;
	lName: string;
	userID: string;
}
