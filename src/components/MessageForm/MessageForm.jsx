import styles from './MessageForm.module.scss'

export const MessageForm = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Input text" />
      <input type="submit"/ >
    </form>
  )
}
