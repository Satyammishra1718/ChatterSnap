export interface TextFieldData {
    label: string;
    type: "text" | "password";
}

export interface IconButtonData  {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  };

export interface ChatListProps {
    w?: string;
    chats?: any;
    chatId?: string;
    onlineUsers?: string[];
    newMessageAlert?: { chatId: string; count: number }[];
    handleDeleteChat?: () => void;
  };

export interface ChatItemProps {
    avatar?: string[]; 
    name?: string;
    _id?: string;
    groupChat?: boolean; 
    sameSender?: boolean;
    isOnline?: boolean;
    newMessageAlert?: any;
    index?: number;
    handleDeleteChatOpen?: any;
    members?: string[];
  }