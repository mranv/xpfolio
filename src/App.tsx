import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WinXPLayout } from './components/WinXPLayout'
import { NotificationProvider } from './contexts/NotificationContext'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Projects } from './pages/Projects'

function App() {
  return (
    <Router>
      <NotificationProvider>
        <WinXPLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </WinXPLayout>
      </NotificationProvider>
    </Router>
  )
}

export default App 