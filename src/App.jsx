import { useEffect, useState } from 'react'

import { AboutPage } from './pages/About'
import { ContactsPage } from './pages/Contacts'
import { LoginPage } from './pages/Login'

function App() {

  const [page, setPage] = useState(location.hash.slice(1));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const pageFromHash = location.hash.slice(1)
      setPage(pageFromHash)
    });
  }, [])

  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </header>

      { page === 'about' && <AboutPage />}
      { page === 'contacts' && <ContactsPage />}
      { page === 'login' && <LoginPage />}
    </div>
  )
}

export default App
