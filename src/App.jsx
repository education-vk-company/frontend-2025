import { List } from './components/List/List'
// import styles from './App.css'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [chatsList, setChatsList] = useState({})
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className={styles.App}>
      <div>
        {/* <List /> */}
      </div>
      <div>active</div>
    </div>
  )
}

export default App
