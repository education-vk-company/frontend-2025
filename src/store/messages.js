import { chatsApi } from '../api/chats'
import { chatsListApi } from '../api/chatsList'
import { create } from 'zustand'

export const useMessagesStore = create((set, get) => ({
  chatsList: [],
  chats: {
    // 12341234: [
    // { text: '', time: '', id: '', author: '' .... }
    // ]
  },

  fetchChatsList: () => {
    set((state) => ({ chatsList: chatsListApi }))
  },

  fetchChatByID: (id) => {
    const foundedChat = chatsApi.find((chatObj) => chatObj.id === +id)
    if (foundedChat) {
      set((state) => ({ chats: {
        ...state.chats,
        [foundedChat.id]: foundedChat,
      } }))
    }
  },
}))

