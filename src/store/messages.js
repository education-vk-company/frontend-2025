import { create } from 'zustand'
import { getCurrTime } from '../../server/utils';

export const useMessagesStore = create((set, get) => ({
  chatsList: [],
  chats: {
    // 12341234: [
    // { text: '', time: '', id: '', author: '' .... }
    // ]
  },

  fetchChatsList: async () => {
    const resP = await fetch('/api/chatslist');
    const res = await resP.json()
    set((state) => ({ chatsList: res }))
  },

  fetchChatByID: async (id) => {
    const resP = await fetch(`/api/chat/${id}`);
    const res = await resP.json()

    if (res.id !== undefined) {
      set((state) => ({ chats: {
        ...state.chats,
        [res.id]: res,
      } }))
    }
  },

  sendMessage: async (chatID, text, media) => {
    const chat = get().chats[chatID];
    chat.messages.push({
      isOurs: true,
      text,
      time: getCurrTime(),
    })

    const resP = await fetch(`/api/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        chatID,
        media,
      })
    });
    const res = await resP.json()

    set((state) => ({
      chats: {
        ...state.chats,
        [chat.id]: chat,
      }
    }))
  },
}))

