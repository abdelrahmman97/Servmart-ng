import { ICity } from "./ICity";

export interface IGovernorate {
	id: number,
	nameAr: string,
	nameEn: string,
	city: ICity[]
}
