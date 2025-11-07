import { useRef } from 'react'

export const MessageForm = ({ onFormSubmit }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault()
    const inputEl = inputRef.current;
    if (!inputEl) {
      return;
    }

    onFormSubmit(inputEl.value)
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Input text"
        ref={inputRef}
      />
      <input type="submit"/ >
    </form>
  )
}
