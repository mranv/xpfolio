import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WinXPLayout } from './components/WinXPLayout'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Projects } from './pages/Projects'

function App() {
  return (
    <Router>
      <WinXPLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </WinXPLayout>
    </Router>
  )
}

export default App 