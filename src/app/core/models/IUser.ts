export interface IUser {
	ID?: string;
	// personal info
	FName: string;
	LName: string;
	SSN: string;
	PhoneNo: string;
	Address: string;
	Username: string;
	Email: string;
	PasswordHash: string;
	PasswordSalt: string;
	ProfilePic: string;
	RoleID: number;
	work: string;
	Birthday:Date;
	Gender: string;
}
