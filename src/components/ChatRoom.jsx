import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

const apiKey = import.meta.env.VITE_STREAM_API_KEY;

const user = {
  id: "john",
  name: "John",
  image: "https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg",
};

export default function App() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const init = async () => {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel("messaging", "sky-stream", {
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpATDkGgyMZSmXxi-xkU5kEdTXk-OozasXN2F8FGNaJeiGhiEr",
        name: "SkyStream Chat",
        members: [user.id],
      });

      await channel.watch();

      setChannel(channel);
      setClient(chatClient);
    };

    init();

    return () => {
      if (client) client.disconnectUser();
    };
  }, []);

  if (!client || !channel) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Chat client={client} theme="messaging dark">
        <div className="flex h-screen">
          {/* Sidebar: Groups */}
          <div className="w-1/4 border-r border-gray-800 flex flex-col bg-black">
            <div className="p-6 bg-black text-center text-2xl font-semibold text-white shadow-lg">
              Groups
            </div>
            <ChannelList
              filters={{ type: "messaging", members: { $in: [user.id] } }}
              sort={{ last_message_at: -1 }}
              options={{ state: true, presence: true }}
              className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black bg-black"
            />
          </div>

          {/* Main Chat Section */}
          <div className="flex-1 flex flex-col bg-black">
            <Channel channel={channel}>
              <Window>
                {/* Channel Header */}
                <div className="sticky top-0 bg-black z-10 border-b border-gray-800">
                  <ChannelHeader
                    className="text-white"
                    title="React Talk"
                    subtitle="Talk about React with your peers"
                  />
                </div>

                {/* Messages */}
                <div className="flex-1 p-6 overflow-hidden flex flex-col bg-black">
                  <div className="flex-1 overflow-y-auto rounded-md bg-black p-6 shadow-inner scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black">
                    <MessageList className="mb-4" />
                  </div>
                  <div className="sticky bottom-0 bg-black p-4 border-t border-gray-800">
                    <MessageInput
                      className="w-full border border-gray-700 rounded-lg p-3 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
                      placeholder="Type your message..."
                    />
                  </div>
                </div>
              </Window>
              <Thread className="bg-black p-4 rounded-lg" />
            </Channel>
          </div>
        </div>
      </Chat>
    </div>
  );
}





// TOdo: This is a Acrive code....
// import React, { useEffect, useState } from "react";
// import { StreamChat } from "stream-chat";
// import {
//   Chat,
//   Channel,
//   Window,
//   ChannelHeader,
//   MessageList,
//   MessageInput,
//   Thread,
//   LoadingIndicator,
// } from "stream-chat-react";
// import "stream-chat-react/dist/css/v2/index.css";

// const apiKey = import.meta.env.VITE_STREAM_API_KEY;

// const user = {
//   id: "john",
//   name: "John",
//   image: "https://getstream.imgix.net/images/random_svg/FS.png",
// };

// export default function App() {
//   const [client, setClient] = useState(null);
//   const [channel, setChannel] = useState(null);

//   useEffect(() => {
//     const init = async () => {
//       const chatClient = StreamChat.getInstance(apiKey);

//       await chatClient.connectUser(user, chatClient.devToken(user.id));

//       // Create or get the "react-talk" channel
//       const channel = chatClient.channel("messaging", "react-talk", {
//         image: "https://www.drupal.org/files/project-images/react.png",
//         name: "Talk about React",
//         members: [user.id],
//       });

//       await channel.watch();

//       setChannel(channel);
//       setClient(chatClient);
//     };

//     init();

//     return () => {
//       if (client) client.disconnectUser();
//     };
//   }, []);

//   if (!client || !channel) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <LoadingIndicator />
//       </div>
//     );
//   }

//   return (
//     <Chat client={client} theme="messaging light">
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// }





// ! Peerfect Applied
// import React, { useEffect, useState } from "react";
// import { StreamChat } from "stream-chat";
// import {
//   Chat,
//   Channel,
//   ChannelList,
//   Window,
//   ChannelHeader,
//   MessageList,
//   MessageInput,
//   Thread,
//   LoadingIndicator,
// } from "stream-chat-react";
// import "stream-chat-react/dist/css/v2/index.css";

// const apiKey = import.meta.env.VITE_STREAM_API_KEY;

// const user = {
//   id: "john",
//   name: "John",
//   image: "https://getstream.imgix.net/images/random_svg/FS.png",
// };

// export default function App() {
//   const [client, setClient] = useState(null);
//   const [channel, setChannel] = useState(null);

//   useEffect(() => {
//     const init = async () => {
//       const chatClient = StreamChat.getInstance(apiKey);

//       await chatClient.connectUser(user, chatClient.devToken(user.id));

//       const channel = chatClient.channel("messaging", "react-talk", {
//         image: "https://www.drupal.org/files/project-images/react.png",
//         name: "Talk about React",
//         members: [user.id],
//       });

//       await channel.watch();

//       setChannel(channel);
//       setClient(chatClient);
//     };

//     init();

//     return () => {
//       if (client) client.disconnectUser();
//     };
//   }, []);

//   if (!client || !channel) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black text-white">
//         <LoadingIndicator />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white font-sans">
//       <Chat client={client} theme="messaging dark">
//         <div className="flex h-screen">
//           {/* Sidebar: Groups */}
//           <div className="w-1/4 border-r border-gray-800 flex flex-col bg-black">
//             <div className="p-6 bg-black text-center text-2xl font-semibold text-white shadow-lg">
//               Groups
//             </div>
//             <ChannelList
//               filters={{ type: "messaging", members: { $in: [user.id] } }}
//               sort={{ last_message_at: -1 }}
//               options={{ state: true, presence: true }}
//               className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black bg-black"
//             />
//           </div>

//           {/* Main Chat Section */}
//           <div className="flex-1 flex flex-col bg-black">
//             <Channel channel={channel}>
//               <Window>
//                 {/* Channel Header */}
//                 <div className="sticky top-0 bg-black z-10 border-b border-gray-800">
//                   <ChannelHeader
//                     className="text-white"
//                     title="React Talk"
//                     subtitle="Talk about React with your peers"
//                   />
//                 </div>

//                 {/* Messages */}
//                 <div className="flex-1 p-6 overflow-hidden flex flex-col bg-black">
//                   <div className="flex-1 overflow-y-auto rounded-md bg-black p-6 shadow-inner scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black">
//                     <MessageList className="mb-4" />
//                   </div>
//                   <div className="sticky bottom-0 bg-black p-4 border-t border-gray-800">
//                     <MessageInput
//                       className="w-full border border-gray-700 rounded-lg p-3 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
//                       placeholder="Type your message..."
//                     />
//                   </div>
//                 </div>
//               </Window>
//               <Thread className="bg-black p-4 rounded-lg" />
//             </Channel>
//           </div>
//         </div>
//       </Chat>
//     </div>
//   );
// }
