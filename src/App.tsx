import { useState, useEffect } from 'react';
import { StreamChat, type User, type Channel as StreamChannel } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';
import './layout.css';

const apiKey = '5qpb6gfdmpu8';
const userId = 'john609';
const userName = 'Chat_app12';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiam9objYwOSJ9.KW4rl6qxO68WlxutxLlToao86wspyN9qsmcb-L57yds';

const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const App = () => {
  const [channel, setChannel] = useState<StreamChannel | null>(null);
  const [client, setClient] = useState<StreamChat | null>(null);

  useEffect(() => {
    const initClient = async () => {
      const chatClient = StreamChat.getInstance(apiKey);
  
      try {
        await chatClient.connectUser(user, userToken);
  
        const chatChannel = chatClient.channel('messaging', 'custom_channel_id', {
          members: [userId],
        });
  
        await chatChannel.update({
          name: "Welcome to Aizen's Chat Room",
          image: 'https://e7.pngegg.com/pngimages/744/949/png-clipart-sōsuke-aizen-rangiku-matsumoto-renji-abarai-byakuya-kuchiki-ichigo-kurosaki-ichigo-kurosaki-black-hair-hand-thumbnail.png',
        });
  
        await chatChannel.watch();
  
        setClient(chatClient);
        setChannel(chatChannel);
      } catch (error) {
        console.error('Error initializing Stream Chat client:', error);
      }
    };
  
    initClient();
  
    return () => client?.disconnectUser();
  }, []);
  

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
