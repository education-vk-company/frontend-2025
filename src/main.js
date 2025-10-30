import './style.css'

import { ChatItemComponent, ListenChatClick } from './components/ChatItem'
import { chats, chatsList } from './api'

import { ActiveChatComponent } from './components/ActiveChat'
import { ChatFormComponent } from './components/ChatForm'

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


    const ActiveChat = ActiveChatComponent(chats.find((activeChatElement) => activeChatElement.id === activeChatID));

    const ChatForm = ChatFormComponent()

    document.querySelector('#app').innerHTML = `
      <div class="chats">
        ${ChatItems}
      </div>
      <div class="active">
        ${ActiveChat}
        <div class="message-form">
          ${ChatForm}
        </div>
      </div>
    `

    ListenChatClick(document.querySelector('.chats'), (clickedIndex) => {
      activeChatID = clickedIndex;
      render();
    })
  }

  render();
}

App();
