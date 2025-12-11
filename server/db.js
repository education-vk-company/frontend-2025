import { getCurrTime } from "./utils";

export const chatsList = [
  {
    id: 0,
    name: 'Shrek',
    type: 'pm',
    unreadMessages: 99,
    hasMentions: false,
    lastMessage: {
      text: 'Azaza, ya tibya zatrallil)))00)0)nulik))00',
      isOurs: true,
      isRead: true,
      attachment: {
        type: 'image',
        src: 'https://otvet.cdn-vk.net/pictures/logo.svg',
      },
      time: getCurrTime(),
    },
    avatar: 'https://i.pravatar.cc/300?img=11',
  },
  {
    id: 1,
    name: 'Donkey',
    type: 'pm',
    unreadMessages: 99,
    hasMentions: true,
    lastMessage: {
      text: 'А я осёл!',
      isOurs: true,
      isRead: true,
      attachment: {
        type: 'image',
        src: 'https://otvet.cdn-vk.net/pictures/logo.svg',
      },
      time: getCurrTime(),
    },
    avatar: 'https://i.pravatar.cc/300?img=10',
  },
  {
    id: 2,
    name: 'Swamp',
    type: 'chat',
    unreadMessages: 228,
    hasMentions: true,
    lastMessage: {
      text: 'Осёл, куда делась моя еда?',
      isOurs: false,
      isRead: true,
      time: getCurrTime(),
    },
    avatar: 'https://i.pravatar.cc/300?img=7',
  },
  {
    id: 3,
    name: 'Fiona',
    type: 'pm',
    unreadMessages: 0,
    hasMentions: false,
    lastMessage: {
      text: 'Прости, сегодня не приду ((',
      isOurs: false,
      isRead: true,
      time: getCurrTime(),
    },
    avatar: 'https://i.pravatar.cc/300?img=5',
  },
]


export const chats = [
  {
    id: 0,
    messages: [
      {
        isOurs: false,
        text: 'hello1!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello2!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello3!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello4!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello1!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello2!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello3!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello4!',
        time: getCurrTime(),
      },
    ]
  },
  {
    id: 1,
    messages: [
      {
        isOurs: false,
        text: 'hello5!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello6!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello7!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello8!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello5!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello6!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello7!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello8!',
        time: getCurrTime(),
      },
    ]
  },
  {
    id: 2,
    messages: [
      {
        isOurs: false,
        text: 'hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: 'hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: 'hello!',
        time: getCurrTime(),
      },
    ]
  },
  {
    id: 3,
    messages: [
      {
        isOurs: false,
        text: '1hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: '2hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: '3hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: '4hello!',
        time: getCurrTime(),
      },
      {
        isOurs: false,
        text: '5hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: '6hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: '7hello!',
        time: getCurrTime(),
      },
      {
        isOurs: true,
        text: '8hello!',
        time: getCurrTime(),
      },
    ]
  },
]
