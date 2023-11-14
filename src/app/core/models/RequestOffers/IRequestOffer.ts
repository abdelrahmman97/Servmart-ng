import { IRequest } from "../Request/IRequest";

export interface IRequestOffer {
	id: string;
	request: IRequest;
	details: string;
	expectSalary: number;
	duration: number;
	status: number;
	createdAt: string;
}


