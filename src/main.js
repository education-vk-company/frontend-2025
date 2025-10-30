import './style.css'

import { ChatItemComponent } from './components/ChatItem'

const App = () => {
  const ChatItem = ChatItemComponent('Дженифер')
  document.querySelector('#app').innerHTML = `
    <div class="chats">
      ${ChatItem}
    </div>
    <div class="active">
      active
    </div>
  `
}



App();

