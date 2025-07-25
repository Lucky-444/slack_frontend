import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from "lucide-react";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { useEffect, useState } from "react";
import { WorkspaceInviteModal } from "../../organisms/Modals/WorkspaceInviteModal";

export const WorkspacePanelHeader = ({ workspace }) => {
  console.log("workspace is", workspace);
  const [openInviteModal , setOpenInviteModal] = useState(false);
  const workspacemembers = workspace?.members;

  const { auth } = useAuth();

  console.log("auth is -> ", auth);

  const isLoggedInUserAdminOfWorkspace = workspacemembers?.find(
    (member) =>
      member.memberId?._id === auth?.user?._id && member.role === "admin"
  );

  console.log("user is admin of workspace", isLoggedInUserAdminOfWorkspace);

  const { openPreferences, setOpenPreferences, setInitialValue } =
    useWorkspacePreferencesModal();
  const { setWorkspace } = useWorkspacePreferencesModal();

  useEffect(() => {
    setWorkspace(workspace);
  }, []);

  return (
    <>
      <WorkspaceInviteModal
        openInviteModal={openInviteModal}
        setOpenInviteModal={setOpenInviteModal}
        workspaceName={workspace?.name}
        joinCode={workspace?.joincode} 
        workspaceId={workspace?._id}
       />
      <div className="flex items-center justify-between px-4 h-[50px] gap-0.5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="ghost"
              className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
            >
              <span className="truncate">{workspace?.name}</span>
              <ChevronDownIcon className="size-5 ml-1" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="bottom" align="start" className="w-64">
            <DropdownMenuItem>
              <div className="size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2 bg-[#616061]">
                {workspace?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">{workspace?.name}</p>
                <p className="text-xs text-muted-foreground">
                  Active Workspace
                </p>
              </div>
            </DropdownMenuItem>

            {isLoggedInUserAdminOfWorkspace && (
              <>
                <DropdownMenuItem
                  className="cursor-pointer py-2"
                  onClick={() => {
                    // Open the workspace preferences modal
                    // This function should be defined to handle opening the modal
                    setOpenPreferences(true);
                    setInitialValue(workspace?.name);
                  }}
                >
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer py-2"
                  onClick={()=> {setOpenInviteModal(true)}} 
                >
                  Invite people to {workspace?.name}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-0.5">
          <Button variant="transparent" size="iconSm">
            <ListFilterIcon className="size-5" />
          </Button>

          <Button variant="transparent" size="iconSm">
            <SquarePenIcon className="size-5" />
          </Button>
        </div>
      </div>
    </>
  );
};
