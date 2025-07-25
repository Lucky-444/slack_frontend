import { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import { useChannelMessages } from '@/hooks/context/useChannelMessages';

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

    const [currentChannel, setCurrentChannel] = useState(null);
    const { messageList, setMessageList } = useChannelMessages();

    const socket = io("http://localhost:3000");

  
     socket.on('NewMessageRecevied', (data) => {
        console.log('New message received', data);
        setMessageList([...messageList, data]);
    });
   
   

    async function joinChannel(channelId) {
        socket.emit('JoinChannel', { channelId }, (data) => {
            console.log('Successfully joined the channel', data);
            setCurrentChannel(data?.data);
        });
    }

    return (
        <SocketContext.Provider value={{socket, joinChannel, currentChannel}}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;