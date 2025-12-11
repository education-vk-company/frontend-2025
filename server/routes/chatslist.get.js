import { chatsList } from "../db"

export default defineEventHandler(() => {
  return chatsList;
})
