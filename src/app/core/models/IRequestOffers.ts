import { RequestState } from "../Enums/RequestState.enum";

export interface IRequestOffers {
	ID: number;
	ProviderID: number;
	RequestID: number;
	State: RequestState;
	Direct: boolean;
}
