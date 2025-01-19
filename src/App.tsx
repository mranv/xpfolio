import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { WinXPLayout } from './components/WinXPLayout'
import { NotificationProvider } from './contexts/NotificationContext'
import { WindowProvider } from './contexts/WindowContext'
import { Routes } from './Routes'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <NotificationProvider>
          <WindowProvider>
            <WinXPLayout>
              <Routes />
            </WinXPLayout>
          </WindowProvider>
        </NotificationProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App 