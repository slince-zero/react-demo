import './App.css'
import List from './components/List'
import Redpoint from './components/Redpoint'
import { ThemeContextProvider } from './context/theme.tsx'
import Header from './components/Header.tsx'
import StatusBar from './components/statusBar.tsx'
import GirdBox from './components/girdBox.tsx'
import { CircleAnimation } from './components/circleAnimation.tsx'

function App() {
  return (
    <>
      <ThemeContextProvider>
        <CircleAnimation/>
        <GirdBox/>
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
