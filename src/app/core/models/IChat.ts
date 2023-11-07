import { IMessage } from "./IMessage";
import { IRequest } from "./Request/IRequest";
import { IUser } from "./IUser";

export interface Chat {
	ID?: string;
	FirstUserId: string;
	SecondUserId: string;
	RequestID: string;
}
