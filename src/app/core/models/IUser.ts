
export interface IUser {
	ID: number; 
	// personal info
	FName: string;
	LName: string;
	SSN: string;
	PhoneNo: string;
	Address: string;
	// Account Info
	Username: string;
	Email: string;
	HashedPassword: string;
	ProfilePic: string;
	RoleID: number;
	work: string;
	Birthday:Date;
	Gender: string;
}
