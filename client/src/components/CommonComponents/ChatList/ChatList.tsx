import { Stack } from "@mui/material";
import { ChatListProps } from "../../../constants/types.constants";
import ChatItem from "../ChatItem/ChatItem";

const ChatList: React.FC<ChatListProps> = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessageAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction="column">
      {chats?.map((data: any, index: number) => {
        const { avatar, _id, name, groupChat, members } = data;

        const newMessage = newMessageAlert.find(({ chatId }) => chatId === _id);

        const isOnline = members?.some(() =>
          onlineUsers.includes(_id)
        );

        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessage}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
