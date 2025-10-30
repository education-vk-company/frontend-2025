import './style.css'

import { ChatItemComponent, ListenChatClick } from './components/ChatItem'

import { ActiveChatComponent } from './components/ActiveChat'
import { chatsList } from './api'

const App = () => {
  let activeChatID = 0;

  const render = () => {
    const ChatItems = chatsList.map((chatElement, index) => ChatItemComponent(
      chatElement.name,
      chatElement.avatar,
      chatElement.lastMessage.text,
      chatElement.lastMessage.time.toLocaleTimeString(),
      index,
    )).join('')

    const ActiveChat = ActiveChatComponent(activeChatID);

    document.querySelector('#app').innerHTML = `
      <div class="chats">
        ${ChatItems}
      </div>
      <div class="active">
        ${ActiveChat}
      </div>
    `
  }

  render();

  ListenChatClick(document.querySelector('.chats'), (clickedIndex) => {
    activeChatID = clickedIndex;
    render();
  })
}



App();
