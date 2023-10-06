import { RequestState } from "../Enums/RequestState.enum";

export interface RequestOffer {
	ID?: string;
	RequestID: string;
	ProviderID: string;
	State: RequestState;
	IsDirect: boolean;
}
