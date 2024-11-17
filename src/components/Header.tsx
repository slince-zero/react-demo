import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function Header() {
  const context = useContext(ThemeContext)
  if (!context) {
    return <div>Loading...</div>
  }
  const { theme, toggleTheme } = context

  return (
    <header
      className={`w-[100px] h-[100px] bg-slate-800 ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}>
      <h1 className='text-3xl'>header</h1>
      <button onClick={toggleTheme}>切换</button>
    </header>
  )
}
