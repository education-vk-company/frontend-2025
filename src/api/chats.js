import { chatsList } from './chatsList';

export const chats = [
  {
    id: 0,
    messages: [
      {
        isOurs: false,
        text: 'hello1!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello2!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello3!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello4!',
        time: new Date(),
      },
    ]
  },
  {
    id: 1,
    messages: [
      {
        isOurs: false,
        text: 'hello5!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello6!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello7!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello8!',
        time: new Date(),
      },
    ]
  },
  {
    id: 2,
    messages: [
      {
        isOurs: false,
        text: 'hello!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: new Date(),
      },
    ]
  },
  {
    id: 3,
    messages: [
      {
        isOurs: false,
        text: 'hello!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: new Date(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: new Date(),
      },
    ]
  },
].map(chat => {
  return {
    ...chat,
    name: chatsList.find(chatListItem => chatListItem.id === chat.id ).name
  }
})

