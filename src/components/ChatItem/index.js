import './style.css'

export const ChatItemComponent = (nickname, avatar, text, time) => {
  return `
    <div class="chat-item">
      <div class="ava" style="background-image: url(${avatar});"></div>
      <div class="preview">
        <div class="nickname">${nickname}</div>
        <div class="messge">${text}</div>
      </div>
      <div class="meta">${time}</div>
    </div>
  `
}
