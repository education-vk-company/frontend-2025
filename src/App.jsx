import './App.css'

import { useState } from 'react'

function App() {
  const [chatsList, setChatsList] = useState({})
  const [activeChat, setActiveChat] = useState({})

  return (
    <div>
      <div>list</div>
      <div>active</div>
    </div>
  )
}

export default App
