import { TextFieldData } from "./types.constants";
import { ChatItemProps } from "./types.constants";

export const textFieldsDataLogin : TextFieldData[] = [
    { label: "Username", type: "text" },
    { label: "Password", type: "password" },
];

export const textFieldsDataRegister : TextFieldData[] = [
    { label: "FullName", type: "text" },
    { label: "Username", type: "text" },
    { label: "Password", type: "password" },
    { label: "Bio", type: "text" },
];

export const sampleData: ChatItemProps[] = [
    {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
      _id: "1",
      groupChat: false,
      sameSender: true,
      isOnline: true, 
      newMessageAlert: {}, 
      index: 0,
      handleDeleteChatOpen: () => {},
      members: ["1", "2"],
    },
  ];