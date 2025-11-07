import { ActiveChat } from './components/ActiveChat/ActiveChat'
import { List } from './components/List/List'
import { chatsApi } from './api/chats'
import { chatsListApi } from './api/chatsList'
// import styles from './App.css'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [chatsList, setChatsList] = useState(chatsListApi)
  const [activeChat, setActiveChat] = useState(chatsApi)

  return (
    <div className={styles.App}>
      <div>
        <List list={chatsList} />
      </div>
      <ActiveChat
        messages={activeChat[0].messages}
      />
    </div>
  )
}

export default App
