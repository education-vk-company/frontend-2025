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

  const [isVideoActive, setIsVideoActive] = useState(false)

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

      setIsVideoActive(isActive);

      if (isActive) {
        videoEl.pause()
        mediaRecorder.stop()
        videoEl.srcObject = null
        setIsVideoActive(false);
        return
      }

      const constraints = { audio: true, video: {
        width: 720,
        height: 720,
      } };

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      setIsVideoActive(true);
      videoRef.current.srcObject = stream;

      let myLocalMediaRecorder = mediaRecorder;
      if (!myLocalMediaRecorder) {
        myLocalMediaRecorder = new MediaRecorder(stream)
        setMediaRecorder(myLocalMediaRecorder)

        myLocalMediaRecorder.addEventListener('dataavailable', (event) => {
          setChanks([...chunks, event.data])
        })
      }

      videoRef.current.play()
      myLocalMediaRecorder.start();
    }
  }

  useEffect(() => {
    if (mediaRecorder && !isVideoActive && chunks.length) {
      const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
      setChanks([]);

      // Для превью
      // const mediaURL = URL.createObjectURL(blob);
      // const recordedVideoEl = recordedVideoRef.current;
      // if (recordedVideoEl) {
      //   recordedVideoEl.src = mediaURL;
      //   recordedVideoEl.play();
      // }

      const formdata = new FormData();
      formdata.append('video', blob, 'video.webm')

      const sendMedia = async () => {
        const data = await fetch('/api/media', {
          method: 'POST',
          body: formdata,
        })

        const filename = await data.json()
        sendMessage(activeChatID, '', filename)
      }

      sendMedia()

    }
  }, [mediaRecorder, chunks, isVideoActive])

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
        <div
          className={classNames(styles.VideoKroozhocheckContainer, {[styles.VideoKroozhocheckContainerActive]: isVideoActive})}
          onClick={(e) => onVideoClick(e)}
        >
          <video className={classNames(styles.VideoKroozhocheck)} ref={videoRef}></video>
        </div>
        <MessageForm
          onFormSubmit={(text) => onFormSubmit(text)}
          onVideoClick={(e) => onVideoClick(e)}
        />
      </div>
    </>
  )
}
