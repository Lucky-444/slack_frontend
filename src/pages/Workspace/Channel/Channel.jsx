import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { useParams } from "react-router-dom";

import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById";
import { ChannelHeader } from "../../../components/molecules/Channel/ChannelHeader";
import { useEffect, useRef } from "react";
import { useSocket } from "../../../hooks/context/useSocket";
import { useGetChannelMessages } from "../../../hooks/apis/channels/useGetChannelMessages";
import { Message } from "../../../components/molecules/Message/Message";
import { useQueryClient } from "@tanstack/react-query";
import { useChannelMessages } from "../../../hooks/context/useChannelMessages";

export const Channel = () => {
  const queryClient = useQueryClient();
  const { setMessageList, messageList } = useChannelMessages();
  const { channelId } = useParams();
  const { messages, isSuccess } = useGetChannelMessages(channelId);
  const { channelDetails, isFetching, isError } = useGetChannelById(channelId);
  const { joinChannel } = useSocket();

  const messageContainerListRef = useRef(null);
  const bottomRef = useRef(null); // ✅ Dummy div ref

  // Refetch messages on channel change
  useEffect(() => {
    queryClient.invalidateQueries(["getPaginatedMessages"]);
  }, [channelId]);

  // Join socket room after fetch
  useEffect(() => {
    if (!isFetching && !isError) {
      joinChannel(channelId);
    }
  }, [isFetching, isError, joinChannel, channelId]);

  // Set initial messages
  useEffect(() => {
    if (isSuccess) {
      setMessageList(messages);
    }
  }, [isSuccess, messages, setMessageList, channelId]);

  // ✅ Scroll to bottom when messages change
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageList]);

  if (isFetching) {
    return (
      <div className="h-full flex-1 flex items-center justify-center">
        <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full flex-1 flex flex-col gap-y-2 items-center justify-center">
        <TriangleAlertIcon className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Channel Not found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChannelHeader name={channelDetails?.channel.name} />

      <div
        ref={messageContainerListRef}
        className="flex-5 overflow-y-auto p-5 gap-y-2"
      >
        {[...messageList]
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          .map((message) => (
            <Message
              key={message._id}
              body={message.body}
              authorImage={message.senderId?.avatar}
              authorName={message.senderId?.username}
              createdAt={message.createdAt}
            />
          ))}

        {/* ✅ Dummy div at the bottom for auto-scroll */}
        <div ref={bottomRef} />
      </div>

      <div className="flex-1" />
      <ChatInput />
    </div>
  );
};
