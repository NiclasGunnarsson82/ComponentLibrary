import { Dispatch, SetStateAction } from "react";
import { ColourSchemeSelectorType, ColoursType, colourTokens, IColourScheme } from "./colours";
import { generalTokens, IGeneralTokens } from "./general";
import { IThemes, ThemeSelectorType, themeTokens, ThemeType } from "./themes";

export interface ITokens {
    general: IGeneralTokens,
    theme: ThemeType,
    colours: ColoursType
}

export const DefaultTokens: ITokens = {
    general: generalTokens,
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