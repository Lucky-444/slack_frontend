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
    console.log("message is ->" , body);
     const newMessage = {
      _id: Date.now().toString(), // temporary ID or generate using uuid
      body,
      senderId: {
        avatar: auth?.user?.avatar,
        username: auth?.user?.username,
      },
      createdAt: new Date().toISOString(),
    };
    console.log("Now NewMEssage is ->" , newMessage);
    
    setMessageList((prev) =>
      [...prev, newMessage].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      )
    );
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
