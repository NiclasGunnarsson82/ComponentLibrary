import { createContext, ReactNode, useContext } from 'react'
import { designTokens, IDesignTokens } from '@/data/designTokens'

type ThemeProviderProps = {
  children: ReactNode;
}

const ThemeContext = createContext<IDesignTokens>({} as IDesignTokens)

export const ThemeProvider = ({ children }: ThemeProviderProps ) => {
    return (
        <ThemeContext.Provider value={{
            buttonColours: designTokens.buttonColours}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
