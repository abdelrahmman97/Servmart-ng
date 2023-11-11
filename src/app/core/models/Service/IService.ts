import { IRequestServiceCategory } from "../RequestServiceCategory/IServiceCategory";

export interface IService {
	id: string;
	title: string;
	discription: string;
	rate: number;
	expectedSalary: number;
	user: UserService;
	serviceCategory: IRequestServiceCategory;
	serviceMedia: ServiceMedia[];
}

interface UserService {
	id: string;
	fName: string;
	lName: string;
	username: string;
	profilePic: string;
}

interface ServiceMedia {
	id: string;
	mediaUrl: string;
}
