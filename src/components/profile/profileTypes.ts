import { ApiResponse, ResultsResponse } from "../../resourses/types";

export interface ProfileProps {
    logout: () => void, 
    getResults: (id: number) => Promise<ResultsResponse>,
    user_id: number,
}