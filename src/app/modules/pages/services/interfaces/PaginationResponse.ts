import { DataResponse } from "./DataResponse";

export interface PaginationResponse {
    $id: string;
    pageIndex: number;
    pageSize: number;
    count: number;
    data: DataResponse;
}
