import styles from './ActiveMessage.module.css'

export const ActiveMessage = ({ isMy, text, time }) => {

  return (
    <div className={styles.acWrapper}>
      <div className={styles.acMessage}>
        <div className={styles.acText}>${text}</div>
        <div className={styles.acTime}>${time}</div>
      </div>
    </div>
  )
}
