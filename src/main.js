import './style.css'

import { ChatFormComponent, ListenFormSubmit } from './components/ChatForm'
import { ChatItemComponent, ListenChatClick } from './components/ChatItem'
import { addMyMessageToChat, chats, chatsList } from './api'

import { ActiveChatComponent } from './components/ActiveChat'

const App = () => {
  let activeChatID = 0;

  const render = () => {
    const ChatItems = chatsList.map((chatElement, index) => ChatItemComponent(
      chatElement.name,
      chatElement.avatar,
      chatElement.lastMessage.text,
      chatElement.lastMessage.time,
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

    ListenFormSubmit(document.querySelector('form'), (e) => {
      console.log('form submitted', e)
      const myInputForm = e.currentTarget.querySelector('[name=mymessage]');
      if (!myInputForm || !myInputForm.value) {
        return false;
      }

      addMyMessageToChat(activeChatID, myInputForm.value)
      render();
    })
  }

  render();
}

App();
