import { resetJoinCodeRequest } from "../../../apis/workspaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";
export const useResetJoinCode = (workspaceId) => {
  const { auth } = useAuth();
  // we invalidate here
  // rather than in workspacePanelHeader.jsx
  //

  const queryClient = useQueryClient();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: resetJoinCodeMutation,
  } = useMutation({
    mutationFn: () => resetJoinCodeRequest({ workspaceId, token: auth?.token }),
    onSuccess: (data) => {
      console.log("successfully reset the Joincode", data);
      queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
    },
    onError: (error) => {
      console.log("WorkspaceId -> ", workspaceId);

      console.log("failed to reset Joincode ", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    resetJoinCodeMutation,
  };
};
