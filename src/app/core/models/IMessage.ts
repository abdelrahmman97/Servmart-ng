import { IMessageMedia } from "./IMessageMedia";

export interface IMessage {
	ID?: string;
	ChatId: string;
	SenderId: string;
	Content: string;
	Date: Date;
	MessageMedias: IMessageMedia[];
	// User: IUser;
	// Chat: IChat;
}
