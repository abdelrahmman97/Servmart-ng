import { RequestState } from "../Enums/RequestState.enum";

export interface IRequest {
	ID: number;
	ClientID: number;
	MediaID: number;
	Detailes: string;
	ExpectedSalary: number;
	State: RequestState;
	StartDate: Date;
	EndDate: Date;
	RateValue: number;
	RateMessage: string
}
