import { addMyMessageToChat, chatsApi } from './api/chats'

import { ActiveChat } from './components/ActiveChat/ActiveChat'
import { List } from './components/List/List'
import { MessageForm } from './components/MessageForm/MessageForm'
import { chatsListApi } from './api/chatsList'
// import styles from './App.css'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [activeChatID, setActiveChatID] = useState(0)
  const [chatsList, setChatsList] = useState(chatsListApi)
  const [activeChat, setActiveChat] = useState(chatsApi)

  const onFormSubmit = (messageText) => {
    const myNewApi = addMyMessageToChat(activeChatID, messageText)
    setActiveChat(myNewApi);
  }

  return (
    <div className={styles.App}>
      <div>
        <List
          list={chatsList}
          activeId={activeChatID}
          linkClickCallback={(id) => {setActiveChatID(id)}}
        />
      </div>
      <div className={styles.RightColumn}>
        <ActiveChat
          messages={activeChat[activeChatID].messages}
          messagesLength={activeChat[activeChatID].messages.length}
        />
        <MessageForm onFormSubmit={(text) => onFormSubmit(text)} />
      </div>
    </div>
  )
}

export default App
