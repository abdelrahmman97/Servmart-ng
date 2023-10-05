import { RequestState } from "../Enums/RequestState.enum";
import { IRequestMedia } from "./IRequestMedia";

export interface IRequest {
	ID?: string;
	CleintID: string;
	Details: string;
	ExpectSalary: number;
	State: RequestState;
	StartDate: Date;
	EndDate: Date;
	RateValue?: number;
	RateMassage?: string;
	Media?: IRequestMedia[];
	// RequestOffer: IRequestOffer[];
}
