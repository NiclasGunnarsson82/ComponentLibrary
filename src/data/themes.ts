export type ThemeSelectorType = "light" | "dark" 

export type ThemeColoursType = {
    c100: string,
    c200: string,
    c300: string,
    c400: string

}
export type ThemeType = {
    foreground: string,
    background: string,
    error: string,
    success: string,
    inputBorder: string,
    inputBackground: string,
    colours: ThemeColoursType
}

export interface IThemes {
    [theme: string]: ThemeType
}

export const themeTokens: IThemes = {
    light: {
        foreground: "#1b1f23",
        background: "#F8F8F8",
        error: "#950606",
        success: "#06402B",
        inputBorder: "#898989",
        inputBackground: "#FFFFFF",
        colours: {
            c100:"#180c41",
            c200:"#241161",
            c300:"#301782",
            c400:"#3c1da2"  
        }
    },
    dark: {
        foreground: "#F8F8F8",
        background: "#1b1f23",
        error: "#F85149",
        success: "#22C55E",
        inputBorder: "#898989",
        inputBackground: "#1b1f23",
        colours: {
            c100:"#180c41",
            c200:"#241161",
            c300:"#301782",
            c400:"#3c1da2"  
        }
    }    
}