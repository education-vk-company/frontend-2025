import './style.css'

export const ChatItemComponent = (nickname, avatar, text, time) => {
  return `
    <div class="chat-item">
      <div class="ava"></div>
      <div class="preview">
        <div class="nickname">${nickname}</div>
        <div class="messge">My message from preview</div>
      </div>
      <div class="meta">19:09</div>
    </div>
  `
}
