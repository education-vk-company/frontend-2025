import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { addMyMessageToChat, chatsApi, deleteMyMessage } from './api/chats'

import { ChatPage } from './components/ChatPage'
import { chatsListApi } from './api/chatsList'
// import styles from './App.css'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [chatsList, setChatsList] = useState(chatsListApi)
  const [activeChat, setActiveChat] = useState(chatsApi)

  const onFormSubmit = (messageText) => {
    const myNewApi = addMyMessageToChat(0, messageText)
    setActiveChat(myNewApi);
  }

  const onMessageDelete = (messageID) => {
    const myNewApi = deleteMyMessage(0, messageID)
    setActiveChat(myNewApi);
  }

  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/chat/:activeChatID" element={<ChatPage
            chatsList={chatsList}
            activeChat={activeChat}
            onMessageDelete={onMessageDelete}
            onFormSubmit={onFormSubmit}
          />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
