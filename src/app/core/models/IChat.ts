import { IMessage } from "./IMessage";
import { IRequest } from "./IRequest";
import { IUser } from "./IUser";

export interface Chat {
	ID?: string;
	FirstUserId: string;
	SecondUserId: string;
	RequestID: string;
}
