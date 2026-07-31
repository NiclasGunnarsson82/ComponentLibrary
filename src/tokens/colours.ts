export type ColourSchemeSelectorType = 
    | "indigo" 
    | "blue" 
    | "violet" 
    | "emerald" 
    | "rose" 
    | "purple" 
    | "turquoise"
    | "orange"

export const ColourSchemeSelectorDefault: ColourSchemeSelectorType = "indigo" 

export type ColoursType = {
    c100: string,
    c200: string,
    c300: string,
    c400: string
}

export type ColourSchemeType = {
    [theme: string]: ColoursType 
}

export interface IColourScheme {
    [colour: string]: ColourSchemeType
}

export const colourTokens: IColourScheme = {
    indigo: {
        light: {
            c100:"#180c41",
            c200:"#241161",
            c300:"#301782",
            c400:"#3c1da2" 
        },
        dark: {
            c100:"#593fb0",
            c200:"#634ab5",
            c300:"#6d56b9",
            c400:"#7761BE" 
        }         
    },
    blue: {
        light: {
            c100:"#030650",
            c200:"#040877",
            c300:"#060b9f",
            c400:"#070ec7"
        },
        dark: {
            c100:"#393ed2",
            c200:"#454ad5",
            c300:"#5156d8",
            c400:"#5E62DB"
        }        
    },
    violet:{
        light: {
            c100: "#1e1832",
            c200: "#2e244a",
            c300: "#3d3063",
            c400: "#4c3c7c"
        },
        dark: {
            c100: "#5e5089",
            c200: "#675990",
            c300: "#706396",
            c400: "#796D9D"
        }    
    },
    emerald:{
        light: {
            c100: "#013924",
            c200: "#015032",
            c300: "#02613d",
            c400: "#027248"
        },
        dark: {
            c100: "#013924",
            c200: "#015032",
            c300: "#02613d",
            c400: "#027248"
        }     
    },
    rose: {
        light: {
            c100: "#41171b",
            c200: "#612229",
            c300: "#822e36",
            c400: "#A23944"
        },
        dark: {
            c100: "#41171b",
            c200: "#612229",
            c300: "#822e36",
            c400: "#A23944"
        }    
    },
    purple: {
        light: {
            c100:"#16002e",
            c200:"#2a0056",
            c300:"#3e007e", 
            c400:"#5000a8", 
        },
        dark: {
            c100:"#6a26b5",
            c200:"#7333b9",
            c300:"#7c40be", 
            c400:"#854DC2",     
        }       
    },
    turquoise: {
        light: {
            c100:"#003138",
            c200:"#003e47",
            c300:"#004c56", 
            c400:"#005965", 
        },
        dark: {
            c100:"#005965",
            c200:"#0d616d",
            c300:"#1a6a74", 
            c400:"#26727c", 
        }      
    },
    orange: {
        light: {
            c100:"#691900",
            c200:"#862000",
            c300:"#a22700", 
            c400:"#bf2e00", 
        },
        dark: {
            c100:"#bf2e00",
            c200:"#c2380d",
            c300:"#c5431a", 
            c400:"#C94D26", 
        }    
    }  
}