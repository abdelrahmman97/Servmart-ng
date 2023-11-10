export interface ICreateRequest {
	ClientId: string;
	ProviderID: string | null;
	Title: string;
	Category: string;
	GovernorateId: number;
	CityId: number;
	Address: string;
	Details: string;
	ExpectedSalary: number;
	Images: File[];
	Video: File;
	EndDate: Date;
	IsDirect: boolean;
}
