import './style.css'

import { ChatItemComponent } from './components/ChatItem'
import { chats } from './api'

const App = () => {
  const ChatItem = ChatItemComponent('Дженифер')
  document.querySelector('#app').innerHTML = `
    <div class="chats">
      ${JSON.stringify(chats)}
      ${ChatItem}
    </div>
    <div class="active">
      active
    </div>
  `
}



App();
