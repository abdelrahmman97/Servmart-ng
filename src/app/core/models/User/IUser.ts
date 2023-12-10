import { IRole } from "../IRole";

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
	Roles: IRole[];
	work: string;
	Birthday:Date;
	Gender: string;
}
