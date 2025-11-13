import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AboutPage } from './pages/About'
import { ContactsPage } from './pages/Contacts'
import { LoginPage } from './pages/Login'

function App() {
  return (
    <div>
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
