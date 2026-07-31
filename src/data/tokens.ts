import { Dispatch, SetStateAction } from "react";
import { ColourSchemeSelectorType, ColoursType, colourTokens, IColourScheme } from "./colours";
import { designTokens, IDesignTokens } from "./designTokens";
import { IThemes, ThemeSelectorType, themeTokens, ThemeType } from "./themes";

export interface ITokens {
    general: IDesignTokens,
    theme: ThemeType,
    colours: ColoursType
}

export const DefaultTokens: ITokens = {
    general: designTokens,
    theme: themeTokens.light,
    colours: colourTokens.indigo.light
}

export const configureTokens = (
    themeMode: ThemeSelectorType, 
    themeTokens: IThemes,
    colourScheme: ColourSchemeSelectorType,
    colourTokens: IColourScheme,
    setTokens: Dispatch<SetStateAction<ITokens>>): void => {
        setTokens((prev: ITokens) => ({
            ...prev,
            theme: themeTokens[themeMode],
            colours: colourTokens[colourScheme][themeMode]
        }))  
}