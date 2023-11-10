export interface ICart {
	ID: string,
	Products: ICartProduct[]
}

export interface ICartProduct {
	id: number;
	productID?: string;
	productName: string;
	unitPrice : number;
	count: number;
	supPrice: number;
	stoke: number;
	picURL:string;
}
