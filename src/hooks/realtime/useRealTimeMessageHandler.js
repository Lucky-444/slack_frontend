import { useEffect } from "react";
import { useSocket } from "@/hooks/context/useSocket";
import { useChannelMessages } from "../context/useChannelMessages";

export const useRealTimeMessageHandler = () => {
  const { socket, currentChannel } = useSocket();
  const { setMessageList, messageList } = useChannelMessages();

  useEffect(() => {
    if (!socket) return;

    const handleIncomingMessage = (newMessage) => {
      // Only add message if it's for the current channel and not duplicated
      if (
        newMessage.channelId === currentChannel &&
        !messageList.some((msg) => msg._id === newMessage._id)
      ) {
        setMessageList((prev) => [...prev, newMessage]);
      }
    };

    socket.on("Message", handleIncomingMessage);

    return () => {
      socket.off("Message", handleIncomingMessage);
    };
  }, [socket, currentChannel, messageList, setMessageList]);
};
