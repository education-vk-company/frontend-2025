import { memo, useEffect } from 'react'

import { ActiveChat } from '../ActiveChat/ActiveChat'
import { List } from '../List/List'
import { MessageForm } from '../MessageForm/MessageForm'
import classNames from 'classnames'
import styles from './ChatPage.module.scss'
import { useMessagesStore } from '../../store/messages'
import { useParams } from 'react-router-dom'

export const ChatPage = () => {
  const { activeChatID } = useParams()
  const { chatsList, chats, fetchChatsList, fetchChatByID, sendMessage } = useMessagesStore()

  const activeChat = chats[activeChatID];

  useEffect(() => {
    fetchChatsList();
  }, [fetchChatsList])

  useEffect(() => {
    fetchChatByID(activeChatID)
  }, [activeChatID])

  const onFormSubmit = (text) => {
    sendMessage(activeChatID, text)
  }

  const onMessageDelete = () => {

  }

  return (
    <>
      <div className={classNames(styles.ChatPage)}>
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
