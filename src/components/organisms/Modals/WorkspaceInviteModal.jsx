import { CopyIcon, RefreshCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useResetJoinCode } from "../../../hooks/apis/workspaces/useResetJoinCode";

export const WorkspaceInviteModal = ({
  openInviteModal,
  setOpenInviteModal,
  workspaceName,
  joinCode,
  workspaceId,
}) => {
  const { toast } = useToast();

  const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);
  async function handleCopy() {
    const inviteLink = `${window.location.origin}/join/${joinCode}`;
    await navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Link copied to clipboard",
      type: "success",
    });
  }

  async function handleResetCode() {
    // Logic to reset the join code
    // This could involve an API call to your backend to generate a new join code
    // For now, we'll just show a success message
    try {
      await resetJoinCodeMutation();
      toast({
        title: "Join code reset successfully",
        type: "success",
      });
        setOpenInviteModal(false);
    } catch (error) {
      console.log("handleResetCode error", error);
      toast({
        title: "Something Went Wrong",
        type: "error",
      });
    }
  }

  return (
    <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people to {workspaceName}</DialogTitle>
          <DialogDescription>
            Use the code shown below to invite people to your workspace.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-10 gap-y-4">
          <p className="font-bold text-4xl uppercase">{joinCode}</p>
          <Button size="lg" variant="ghost" onClick={handleCopy}>
            Copy Link
            <CopyIcon className="size-4 ml-2" />
          </Button>
        </div>
        <div className="flex items-center justify-center w-full">
          <Button variant="outline" onClick={handleResetCode}>
            Reset Join Code
            <RefreshCcwIcon className="size-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
