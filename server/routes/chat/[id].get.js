import { chats } from "../../db"

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const foundedChat = chats.find((chatObj) => chatObj.id === +id)
  if (foundedChat) {
    return foundedChat;
  }
  return {};
})
