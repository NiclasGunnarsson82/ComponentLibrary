import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ColourSchemeSelectorDefault, 
    ColourSchemeSelectorType, colourTokens } from '@/tokens/colours'
import { ThemeSelectorDefault, ThemeSelectorType, 
    themeTokens } from '@/tokens/themes'
import { configureTokens, DefaultTokens, ITokens } from '@/tokens/tokens'

export type ComponentContextType = {
    tokens: ITokens,
    themeMode: ThemeSelectorType,
    setThemeMode: ( themeMode: ThemeSelectorType ) => void,
    colourScheme: ColourSchemeSelectorType,
    setColourScheme: ( colourScheme: ColourSchemeSelectorType ) => void
}

const Defaults: ComponentContextType = {
    tokens: DefaultTokens,
    themeMode: ThemeSelectorDefault,
    setThemeMode: () => null,
    colourScheme: ColourSchemeSelectorDefault,
    setColourScheme: () => null
}

export type ProviderProps = {
    children: ReactNode;
}

const ComponentContext = createContext<ComponentContextType>(Defaults)

export const ComponentsProvider = ({ children }: ProviderProps ) => {
    const [ tokens, setTokens ] = useState<ITokens>(DefaultTokens)
    const [ themeMode, setThemeMode ] = useState<ThemeSelectorType>(Defaults.themeMode)
    const [ colourScheme, setColourScheme ] = useState<ColourSchemeSelectorType>(Defaults.colourScheme)
    
    useEffect(() => {
        configureTokens( 
            themeMode,
            themeTokens, 
            colourScheme,
            colourTokens,
            setTokens)
    }, [colourScheme, themeMode]);

    return (
        <ComponentContext.Provider value={{
            tokens, 
            themeMode,
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