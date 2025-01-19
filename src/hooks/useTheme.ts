import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { toggleTheme } from '../store/slices/themeSlice'
import { useEffect } from 'react'

export const useTheme = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = theme
  }, [theme])

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return { theme, toggleTheme: handleToggleTheme }
} 