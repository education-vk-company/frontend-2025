import { chatsList } from './chatsList';

export const chats = [
  {
    id: 0,
    messages: [
      {
        isOurs: false,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
    ]
  },
  {
    id: 1,
    messages: [
      {
        isOurs: false,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
    ]
  },
  {
    id: 2,
    messages: [
      {
        isOurs: false,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
    ]
  },
  {
    id: 3,
    messages: [
      {
        isOurs: false,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
      {
        isOurs: true,
        text: 'hello!'
      },
    ]
  },
].map(chat => ({...chat, name: chatsList.find(chatListItem => chatListItem.id === chat.id )}.name))
