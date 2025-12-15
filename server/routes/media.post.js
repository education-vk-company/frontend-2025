import { createWriteStream, writeFileSync } from 'fs'

import { Readable } from 'stream'
import { chats } from '../db'
import fs from 'fs/promises';
import { getCurrTime } from "../utils";

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)
  const body = form.at(0).data
// do stuff
  // const body = await readRawBody(event)

  const filename = `../public/media/${Date.now()}.webm`;
  writeFileSync(filename, body);

  // const webmReadable = new Readable();
  // webmReadable.push(body);
  // webmReadable.push(null);

  // const outputWebmStream = createWriteStream(`../public/media/${Date.now()}.webm`);
  // webmReadable.pipe(outputWebmStream);

  // const chat = chats[chatID];

  // if (chat) {
  //   chat.messages.push(newMessage);
  //   return chat;
  // }

  return { filename };
})
