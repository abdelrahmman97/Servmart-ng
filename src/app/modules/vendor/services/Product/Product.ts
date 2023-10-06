export class Product {

    constructor(Name:string, Description:string, UnitePrice:number, CatID:number, stock:number){
        this.Name =Name;
        this.Discription =Description;
        this.UnitePrice = UnitePrice;
        this.CategoryID = CatID;
        this.Stock =stock
    }

    ID: number;
	ShopID: number;
	CategoryID: number;
	Name: string;
	Discription: string;
	UnitePrice: number;
	MediaID: number;
	Stock: number;
}
