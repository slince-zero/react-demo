import { createContext, useState, ReactNode } from 'react'

// 定义 Context 的类型
type ThemeContextType = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

// 创建 Context 并设置默认值
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // 切换主题的函数
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
