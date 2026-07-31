import { Dispatch, SetStateAction } from "react";
import { ColourSchemeSelectorDefault, ColourSchemeSelectorType, 
    ColoursType, colourTokens, IColourScheme } from "./colours";
import { generalTokens, IGeneralTokens } from "./general";
import { IThemes, ThemeSelectorDefault, ThemeSelectorType, 
    themeTokens, ThemeType } from "./themes";

export interface ITokens {
    general: IGeneralTokens,
    theme: ThemeType,
    colours: ColoursType
}

export const DefaultTokens: ITokens = {
    general: generalTokens,
    theme: themeTokens[ThemeSelectorDefault],
    colours: colourTokens[ColourSchemeSelectorDefault][ThemeSelectorDefault]
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