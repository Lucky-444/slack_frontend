import { useMutation } from "@tanstack/react-query";
import { addChannelToWorkspaceRequest } from "../../../apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
export const useAddChannelToWorkspace = (workspaceId, channelData) => {
  const { auth } = useAuth();
  const token = auth?.token;
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: addChannelToWorkspaceMutation,
  } = useMutation({
    mutationFn: ({ workspaceId, channelName }) =>
      addChannelToWorkspaceRequest({
        workspaceId,
        channelName,
        token,
      }),
    onSuccess: (data) => {
      console.log("Channel added successfully", data);
      // You can add additional logic here, like updating the UI or showing a success message
    },
    onError: (error) => {
      console.error("Error adding channel", error);
      // Handle the error, maybe show a notification to the user
    },
  });

  return { isPending, isSuccess, error, addChannelToWorkspaceMutation };        
};
