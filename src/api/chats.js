import { chatsList } from './chatsList';

export const chats = [
  {
    id: 0,
    messages: [
      {
        isOurs: true,
        text: 'hello!'
      },
    ]
  },
].map(chat => ({...chat, name: chatsList.find(chatListItem => chatListItem.id === chat.id )}.name))
