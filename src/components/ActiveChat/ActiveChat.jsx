import classNames from 'classnames'
import styles from './ActiveChat.module.css'

export const ActiveChat = ({ messages }) => {

  const Message = ({ isOurs, text, time }) => (
    <div
      className={classNames(styles.acMessageWrapper, {[styles.acMessage_right]: isOurs})}
    >
      <div className={styles.acMessage}>
        <div className={styles.acText}>{text}</div>
        <div className={styles.acTime}>{time}</div>
      </div>
    </div>
  )

  const messagesEl = messages.map((props, index) => <Message {...props} key={index} /> )

  return (
    <div className={styles.acWrapper}>
      {messagesEl}
    </div>
  )
}
