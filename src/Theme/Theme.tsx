import { FC, useEffect } from 'react'
import { useAppSelector } from '../store/hooks'

const Theme: FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {

  const theme = useAppSelector(({ main }) => main.themeMode)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }

  }, [theme])
  
  return (
    <>{children}</>
  )
}

export default Theme