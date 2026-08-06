export type ThemeSelectorType = "light" | "dark" 

export const ThemeSelectorDefault: ThemeSelectorType = "light" 

export type ThemeType = {
    foreground: string,
    background: string,
    error: string,
    success: string,
    inputBorder: string,
    inputBackground: string
}

export interface IThemes {
    [theme: string]: ThemeType,
}

export const themeTokens: IThemes = {
    light: {
        foreground: "#1b1f23",
        background: "#F8F8F8",
        error: "#950606",
        success: "#06402B",
        inputBorder: "#898989",
        inputBackground: "#FFFFFF",
    },
    dark: {
        foreground: "#F8F8F8",
        background: "#1b1f23",
        error: "#F85149",
        success: "#22C55E",
        inputBorder: "#898989",
        inputBackground: "#1b1f23"
    }    
}