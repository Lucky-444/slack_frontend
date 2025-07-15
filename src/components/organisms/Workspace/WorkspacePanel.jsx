import { useParams } from "react-router-dom";
import { useGetWorkspaceById } from "../../../hooks/apis/workspaces/useGetWorkspaceById";
import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizonal, SendHorizonalIcon } from "lucide-react";
import { WorkspacePanelHeader } from "../../molecules/workspace/WorkspacePanelHeader";
import { SideBarItem } from "../../atoms/SideBarItem/SideBarItem";
import { WorkspacePanelSection } from "../../molecules/workspace/WorkspacePanelSection";
import { useCreateChannelModal } from "../../../hooks/context/useCreateChannelModal";
import { UserItem } from "../../atoms/UserItem/UserItem";

export const WorkspacePanel = () => {
  const { workspaceId } = useParams();
  const { setOpenCreateChannelModal } = useCreateChannelModal();
  const { workspace, isFetching, isSuccess } = useGetWorkspaceById(workspaceId);
  if (isFetching) {
    return (
      <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
        <Loader className="animate-spin size-6 text-white" />
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
        <AlertTriangleIcon className="size-6 text-white" />
        Something went wrong
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slack-medium">
      <WorkspacePanelHeader workspace={workspace} />
      <div className="flex flex-col px-2 mt-3 mb-1.5">
        <SideBarItem
          label="Threads"
          icon={MessageSquareTextIcon}
          id="threads"
          variant="active"
        />
        <SideBarItem
          label="Drafts & sends"
          icon={SendHorizonalIcon}
          id="drafts"
          variant="default"
        />
      </div>
      <WorkspacePanelSection
        label="Channels"
        onIconClick={() => {setOpenCreateChannelModal(true)}}  // Placeholder for actual functionality
      >
        {workspace?.channels?.map((channel) => {
            return <SideBarItem key={channel._id} icon={HashIcon} label={channel.name} id={channel._id} />
        })}
      </WorkspacePanelSection>

      <WorkspacePanelSection label="Direct Messages" onIconClick={()=> {}}>
        {workspace?.members?.map((items) => {
          return (
            <UserItem
              key={items.memberId._id}
              icon={SendHorizonalIcon}
              label={items.memberId.username}
              id={items._id}
              image={items.memberId.avatar}
              variant="default"
            />
          );
        })}
      </WorkspacePanelSection>
    </div>
  );
};
