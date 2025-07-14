import { deleteWorkspaceRequest } from "../../../apis/workspaces";
import { useAuth } from "../../context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useDeleteWorkspace = (workspaceId) => {
  
  const { auth } = useAuth(); // Assuming you have a way to get the auth token
  const token = auth?.token;

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: deleteWorkspaceMutation,
  } = useMutation({
    mutationFn: () => deleteWorkspaceRequest({ workspaceId, token }),
    onSuccess: (data) => {
      console.log("Workspace deleted successfully", data);
      // Optionally, you can trigger a refetch of workspaces or show a success message
    },
    onError: (error) => {
      console.error("Error deleting workspace", error);
      // Handle the error, e.g., show an error message
    },
  });
  return { isPending, isSuccess, error, deleteWorkspaceMutation };
};
