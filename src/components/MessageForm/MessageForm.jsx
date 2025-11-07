import styles from './MessageForm.module.scss'
import { useRef } from 'react';

export const MessageForm = ({ onFormSubmit }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault()
    const inputEl = inputRef.current;
    if (!inputEl) {
      return;
    }

    onFormSubmit(inputEl.value)

    inputEl.value = '';
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} type="text" placeholder="Input text" ref={inputRef} />
      <input type="submit"/ >
    </form>
  )
}
