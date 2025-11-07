import { ActiveChat } from './components/ActiveChat/ActiveChat'
import { List } from './components/List/List'
import { chatsApi } from './api/chats'
import { chatsListApi } from './api/chatsList'
// import styles from './App.css'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [activeChatID, setActiveChatID] = useState(0)
  const [chatsList, setChatsList] = useState(chatsListApi)
  const [activeChat, setActiveChat] = useState(chatsApi)

  return (
    <div className={styles.App}>
      <div>
        <List
          list={chatsList}
          linkClickCallback={(id) => {setActiveChatID(id)}}
        />
      </div>
      <ActiveChat
        messages={activeChat[activeChatID].messages}
      />
    </div>
  )
}

export default App
