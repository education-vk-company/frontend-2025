import { memo, useEffect, useRef, useState } from 'react'

import { ActiveChat } from '../ActiveChat/ActiveChat'
import { List } from '../List/List'
import { MessageForm } from '../MessageForm/MessageForm'
import classNames from 'classnames'
import styles from './ChatPage.module.scss'
import { useMessagesStore } from '../../store/messages'
import { useParams } from 'react-router-dom'

export const ChatPage = () => {
  const videoRef = useRef(null)
  const recordedVideoRef = useRef(null)

  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [chunks, setChanks] = useState([])

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

      const constraints = { audio: true, video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      videoRef.current.srcObject = stream;

      if (mediaRecorder && isActive) {
        videoEl.pause()
        mediaRecorder.stop()
        videoEl.srcObject = null
        return
      }

      let myLocalMediaRecorder = mediaRecorder;
      if (!myLocalMediaRecorder) {
        myLocalMediaRecorder = new MediaRecorder(stream)
        setMediaRecorder(myLocalMediaRecorder)

        myLocalMediaRecorder.addEventListener('dataavailable', (event) => {
          setChanks([...chunks, event.data])
        })

        myLocalMediaRecorder.addEventListener('stop', (event) => {
          setTimeout(() => {
            const blob = new Blob(chunks, { type: myLocalMediaRecorder.mimeType });
            setChanks([]);
            const mediaURL = URL.createObjectURL(blob);
            const recordedVideoEl = recordedVideoRef.current;
            if (recordedVideoEl) {
              recordedVideoEl.src = mediaURL;
              recordedVideoEl.play();
            }
          }, 300)
        })
      }

      videoRef.current.play()
      myLocalMediaRecorder.start();
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
        <video ref={recordedVideoRef}></video>
        <MessageForm
          onFormSubmit={(text) => onFormSubmit(text)}
          onVideoClick={(e) => onVideoClick(e)}
        />
      </div>
    </>
  )
}
