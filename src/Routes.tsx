import { Routes as RouterRoutes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { SEO } from './components/SEO'

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={
        <>
          <SEO />
          <Home />
        </>
      } />
      <Route path="/dashboard" element={
        <>
          <SEO 
            title="Dashboard - Windows XP Portfolio"
            description="View my project statistics, activities, and achievements in a Windows XP-styled dashboard."
          />
          <Dashboard />
        </>
      } />
    </RouterRoutes>
  )
} 