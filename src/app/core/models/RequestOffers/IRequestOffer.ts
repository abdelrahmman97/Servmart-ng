import { RequestStatus } from "../../Enums/RequestStatus.enum";

export interface IRequestOffer {
	RequestId: string;
	ProviderId: string;
	Status: RequestStatus;
	Details: string;
	ExpectedSalary: number;
	StartDate: Date;
	EndDate: Date;
}


