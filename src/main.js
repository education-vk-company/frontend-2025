import './style.css'

import { ChatItemComponent } from './components/ChatItem'
import { chats as chatsApi } from './api'

const App = () => {
  // ChatItemComponent('Дженифер')
  const ChatItems = chatsApi.map((chatElement) => ChatItemComponent(
    chatElement.name,
    chatElement.avatar,
    chatElement.lastMessage.text,
    chatElement.lastMessage.time.toLocaleTimeString(),
  )).join('')

  document.querySelector('#app').innerHTML = `
    <div class="chats">
      ${ChatItems}
    </div>
    <div class="active">
      active
    </div>
  `
}



App();
