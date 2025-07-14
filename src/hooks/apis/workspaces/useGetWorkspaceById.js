import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkspaceDetailsRequest } from "../../../apis/workspaces";

export const useGetWorkspaceById = (id) => {
    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: workspace } = useQuery({
        queryFn: () => fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token }),
        queryKey: [`fetchWorkspaceById-${id}`],
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspace
    };
};


// when the workspace is deleted, redirect to home page
// when the workspace is updated we invalidate our queryKey and re fetch the workspace details
// so that our updated workspace name is reflected in the UI