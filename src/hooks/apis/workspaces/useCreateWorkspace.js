import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";
import { createWorkspaceRequest } from "../../../apis/workspaces";

export const useCreateWorkspace = () => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    Async: createWorkspaceMutation,
  } = useMutation({
    mutationFn: (data) =>
      createWorkspaceRequest({ ...data, token: auth?.token }),
    onSuccess: (data) => {
      console.log("successfully Created a workspace", data);
    },
    onError: (error) => {
      console.log("failed to create Workspace", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    createWorkspaceMutation,
  };
};
