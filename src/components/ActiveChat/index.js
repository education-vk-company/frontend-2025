import './style.css'

const Message = (text, time, isMy) => {
  const isMyClass = isMy ? 'ac-message_right' : 'ac-message_left'
  return `
    <div class="ac-message ${isMyClass}">
      <div class="ac-text">${text}</div>
      <div class="ac-time">${time}</div>
    </div>
  `
}

export const ActiveChatComponent = (id) => {
  const msg1 = Message('Privet!', '20:10', true)
  const msg2 = Message('Poka!', '20:20', false)

  return `
    <div class="ac-container">
      ${msg1}
      ${msg2}
    </div>
  `
}
