import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { ChatPage } from './components/ChatPage'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/chat/:activeChatID" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
