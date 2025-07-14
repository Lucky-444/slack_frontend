import { updateWorkspaceRequest } from "../../../apis/workspaces";
import { useAuth } from "../../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWorkspace = (workspaceId) => {
  const { auth } = useAuth(); // Assuming you have a way to get the auth token
  token = auth?.token;

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: updateWorkspaceMutation,
  } = useMutation({
    mutationFn: (name) => updateWorkspaceRequest({ workspaceId, name, token }),
    onSuccess: (data) => {
      console.log("Workspace updateed successfully", data);
      // Optionally, you can trigger a refetch of workspaces or show a success message
    },
    onError: (error) => {
      console.error("Error updating  workspace", error);
      // Handle the error, e.g., show an error message
    },
  });
  return { isPending, isSuccess, error, updateWorkspaceMutation };
};
