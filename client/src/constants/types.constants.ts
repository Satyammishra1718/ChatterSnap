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
    chatId?: any;
    onlineUsers?: string[];
    newMessageAlert?: { chatId: any; count: number }[];
    handleDeleteChat?: any;
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
    handleDeleteChat?: any;
    members?: string[];
  }

 export interface AvatarCardProps {
    avatar : any;
    max:any;
}

export interface ProfileCardProps {
  text : any,
  heading : any,
}