import { createContext, ReactNode, useContext, useState } from 'react'
import { 
    designTokens, 
    IDesignTokens, 
    themeTokens, 
    ThemeType,
    ColourSchemeType,
    colourSchemeTokens } from '@/data/designTokens'

export type ThemeModeType = "light" | "dark" | "sepia"

export type ComponentContextType = {
    tokens: IDesignTokens,
    theme: ThemeType,
    setThemeMode: ( themeMode: ThemeModeType ) => void,
    colourScheme: ColourSchemeType,
    setColourScheme: ( colourScheme: ColourSchemeType ) => void
}

const DefaultValues: ComponentContextType = {
    tokens: designTokens,
    theme: themeTokens["light"],
    setThemeMode: () => null,
    colourScheme: colourSchemeTokens,
    setColourScheme: () => null
}

export type ProviderProps = {
    children: ReactNode;
}

const ComponentContext = createContext<ComponentContextType>(DefaultValues)

export const ComponentProvider = ({ children }: ProviderProps ) => {
    const [ theme, setTheme ] = useState<ThemeType>(DefaultValues.theme)
    const [ colourScheme, setColourScheme ] = useState<ColourSchemeType>(DefaultValues.colourScheme)
    const tokens: IDesignTokens = designTokens

    const setThemeMode = (themeMode: ThemeModeType) => {
        setTheme(themeTokens[themeMode])
        console.log('test');
    }

    return (
        <ComponentContext.Provider value={{
            tokens, 
            theme, 
            setThemeMode,
            colourScheme,
            setColourScheme
        }}>
            {children}
        </ComponentContext.Provider>

    )
}


export const useComponentsProvider = () => {
    const context = useContext(ComponentContext)
    if (!context) {
        throw new Error('useComponentsProvider must be used within a ComponentProvider')
    }
    return context
}