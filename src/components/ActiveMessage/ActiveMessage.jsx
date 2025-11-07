import styles from './ActiveMessage.module.css'
import classNames from 'classnames'

export const ActiveMessage = ({ isMy, text, time }) => {

  return (
    <div className={styles.acWrapper}>
      <div className={classNames(styles.acMessage, styles.acMessage_right)}>
        <div className={styles.acText}>${text}</div>
        <div className={styles.acTime}>${time}</div>
      </div>
    </div>
  )
}
