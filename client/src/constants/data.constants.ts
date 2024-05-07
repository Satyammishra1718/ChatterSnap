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
      handleDeleteChat: () => {},
      members: ["1", "2"],
    },
  ];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "2",
  },
]

export const sampleNotifications = [
  {
    sender:{
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender :{
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "2",
  },
]

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "hi there how are you doing ",
    _id: "sfnsdjkfsdnfkdddjsbnd",
    sender: {
      _id: "sdfsdfsdf",
      name: "Chaman  2",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];