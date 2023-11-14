export interface IRequest {
	id: string;
	clientId: string;
	title: string;
	category: string;
	governorateAr: string;
	governorateEn: string;
	cityAr: string;
	cityEn: string;
	address: string;
	details: string;
	expectedSalary: number;
	images: string[];
	video: string;
	endDate: string;
	startDate: string;
}
