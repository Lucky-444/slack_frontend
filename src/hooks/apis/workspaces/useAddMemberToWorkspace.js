import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";
import { addMemberToWorkspaceRequest } from "../../../apis/workspaces";
export const useAddMemberToWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: addMemberToWorkspaceMutation,
  } = useMutation({
    mutationFn: () => addMemberToWorkspaceRequest(workspaceId),
    onSuccess: (data) => {
      console.log("UseAddMemberTOWorkspaceRequest", data);
    },
    onError: (error) => {
      console.log("Use AddMemberToworkspaceError", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    addMemberToWorkspaceMutation,
  };
};
