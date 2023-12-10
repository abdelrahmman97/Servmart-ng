import { IProductCategory } from "./IProductCategory";

export interface IProduct {
	productID?: string;
	categoryID: IProductCategory;
	productName: string;
	description: string;
	unitPrice : string;
	stoke: number;
	picsURL:string;
}
