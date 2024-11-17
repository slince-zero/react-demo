import './App.css'
import List from './components/List'
import Redpoint from './components/Redpoint'
import { ThemeContextProvider } from './context/theme.tsx'
import Header from './components/Header.tsx'
import StatusBar from './components/statusBar.tsx'
function App() {
  return (
    <>
      <ThemeContextProvider>
        <StatusBar/>
        <Header />
        <h1 className='text-3xl font-sans text-red-700'>hello world</h1>
        <List />
        <Redpoint />
      </ThemeContextProvider>
    </>
  )
}

export default App
