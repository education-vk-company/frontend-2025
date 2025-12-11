import { memo, useEffect } from 'react'

import { ActiveChat } from '../ActiveChat/ActiveChat'
import { List } from '../List/List'
import { MessageForm } from '../MessageForm/MessageForm'
import styles from '../../App.module.css'
import { useMessagesStore } from '../../store/messages'
import { useParams } from 'react-router-dom'

export const ChatPage = ({ onMessageDelete, onFormSubmit }) => {
  const { activeChatID } = useParams()
  const { chatsList, chats, fetchChatsList, fetchChatByID } = useMessagesStore()

  const activeChat = chats[activeChatID];

  useEffect(() => {
    fetchChatsList();
  }, [fetchChatsList])

  useEffect(() => {
    fetchChatByID(activeChatID)
  }, [activeChatID])

  return (
    <>
      <div>
        <List
          list={chatsList}
          activeId={activeChatID}
        />
      </div>
      <div className={styles.RightColumn}>
        {activeChat && <ActiveChat
          messages={activeChat.messages}
          messagesLength={activeChat.messages.length}
          deleteMsgCallback={onMessageDelete}
        />}
        <MessageForm onFormSubmit={(text) => onFormSubmit(text)} />
      </div>
    </>
  )
}
