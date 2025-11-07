import { useEffect, useRef } from 'react'

import classNames from 'classnames'
import styles from './ActiveChat.module.css'

export const ActiveChat = ({ messages, messagesLength, deleteMsgCallback }) => {
  const scrollElRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollElRef.current
    if (!scrollElement) {
      return;
    }

    scrollElement.scrollTo(0, 100 * messagesLength)
  }, [messagesLength])

  const Message = ({ isOurs, text, time, onDeleteClick }) => (
    <div
      className={classNames(styles.acMessageWrapper, {[styles.acMessage_right]: isOurs})}
    >
      <div className={styles.acMessage}>
        <div className={styles.acText}>{text}</div>
        <div className={styles.acTime}>{time}</div>
        {
          isOurs && <button onClick={() => onDeleteClick()}>❌</button>
        }
      </div>
    </div>
  )

  const messagesEl = messages.map((props, index) => <Message
    {...props}
    key={index}
    onDeleteClick={() => deleteMsgCallback(index)}
  /> )

  return (
    <div
      ref={scrollElRef}
      className={styles.acWrapper}
    >
      {messagesEl}
    </div>
  )
}
