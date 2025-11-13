import { useEffect, useRef, useState } from 'react'

import { AboutPage } from './pages/About'
import { ContactsPage } from './pages/Contacts'
import { LoginPage } from './pages/Login'

function App() {

  const [page, setPage] = useState(location.pathname.slice(1));
  const headerRef = useRef(null);

  useEffect(() => {
    const Header = headerRef.current;
    if (!Header) {
      return;
    }

    const links = Header.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        setPage(link.pathname.slice(1))
        history.pushState({}, '', link.href)
      });
    });

    window.addEventListener('popstate', () => {
      setPage(location.pathname.slice(1))
    });
  }, [])

  return (
    <div>
      <header ref={headerRef}>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="/login">Login</a>
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
