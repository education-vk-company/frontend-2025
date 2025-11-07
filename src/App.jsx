import { List } from './components/List/List'
// import styles from './App.css'
import { useState } from 'react'

function App() {
  const [chatsList, setChatsList] = useState({})
  const [activeChat, setActiveChat] = useState({})

  return (
    <div>
      <div>
        {/* <List /> */}
      </div>
      <div>active</div>
    </div>
  )
}

export default App
