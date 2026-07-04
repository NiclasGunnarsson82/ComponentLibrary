import { createContext, ReactNode, useContext } from 'react'
import { designTokens, DesignTokensType } from '@/data/designTokens'

type ThemeProviderProps = {
  children: ReactNode;
}

type ThemeContextType = {
  designTokens: DesignTokensType;
}

const ThemeContext = createContext<ThemeContextType>({designTokens})

export const ThemeProvider = ({ children }: ThemeProviderProps ) => {
    return (
        <ThemeContext.Provider value={{designTokens}}>
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
