import { memo, useEffect, useRef } from 'react'

import { ActiveChat } from '../ActiveChat/ActiveChat'
import { List } from '../List/List'
import { MessageForm } from '../MessageForm/MessageForm'
import classNames from 'classnames'
import styles from './ChatPage.module.scss'
import { useMessagesStore } from '../../store/messages'
import { useParams } from 'react-router-dom'

export const ChatPage = () => {
  const videoRef = useRef(null)

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

  const onVideoClick = async (e) => {
    e.preventDefault()

    const videoEl = videoRef.current

    if (videoEl) {
      const isActive = videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended;
      if (isActive) {
        videoEl.pause()
        videoEl.srcObject = null
        return
      }

      const constraints = { audio: true, video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      videoRef.current.srcObject = stream;
      videoRef.current.play()
    }
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
        <video ref={videoRef}></video>
        <MessageForm
          onFormSubmit={(text) => onFormSubmit(text)}
          onVideoClick={(e) => onVideoClick(e)}
        />
      </div>
    </>
  )
}
