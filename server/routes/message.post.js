import { chats } from '../db'
import { getCurrTime } from "../utils";

export default defineEventHandler(async (event) => {
  const { text, chatID } = await readBody(event)
  const newMessage = {
    isOurs: true,
    text,
    time: getCurrTime(),
  }

  const chat = chats[chatID];

  if (chat) {
    chat.messages.push(newMessage);
    return chat;
  }

  return {};
})
