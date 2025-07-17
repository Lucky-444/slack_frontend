import { Editor } from "../../atoms/Editor/Editor";
import { useAuth } from "@/hooks/context/useAuth";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useSocket } from "@/hooks/context/useSocket";
import { useChannelMessages } from "../../../hooks/context/useChannelMessages";

export const ChatInput = () => {
  const { socket, currentChannel } = useSocket();
  const { auth } = useAuth();
  const { currentWorkspace } = useCurrentWorkspace();
  const { setMessageList, messageList } = useChannelMessages();

  async function handleSubmit({ body }) {
    socket?.emit(
      "NewMessage",
      {
        channelId: currentChannel,
        body,
        senderId: auth?.user?._id,
        workspaceId: currentWorkspace?._id,
      },
      (data) => {
        console.log("Message sent", data);
      }
    );
  }

  return (
    <div className="px-5 w-full">
      <Editor
        placeholder="Type a message..."
        onSubmit={handleSubmit}
        onCancel={() => {}}
        disabled={false}
        defaultValue=""
      />
    </div>
  );
};
