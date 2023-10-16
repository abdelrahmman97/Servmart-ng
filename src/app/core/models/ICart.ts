export interface ICart {
	ID: string,
	Products: ICartProduct[]
}

export interface ICartProduct {
	ID: string,
	Name: string,
	UnitPrice: number,
	Quantity: number,
	Image: string,
}
