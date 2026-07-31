export type ColourSchemeSelectorType = 
    | "indigo" 
    | "blue" 
    | "violet" 
    | "emerald" 
    | "rose" 
    | "purple" 
    | "turquoise"
    | "orange"

export type ColourSchemeType = {
    [theme: string]: {
        c100: string,
        c200: string,
        c300: string,
        c400: string
    }   
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
            c100:"",
            c200:"",
            c300:"",
            c400:""
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
            c100: "#",
            c200: "",
            c300: "",
            c400: ""
        }    
    },
    emerald:{
        light: {
            c100: "#013924",
            c200: "#025536",
            c300: "#027248",
            c400: "#038e5a"
        },
        dark: {
            c100: "",
            c200: "",
            c300: "",
            c400: ""
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
            c100: "",
            c200: "",
            c300: "",
            c400: ""
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
            c100:"",
            c200:"",
            c300:"", 
            c400:"",     
        }       
    },
    turquoise: {
        light: {
            c100:"#002d33",
            c200:"#005965",
            c300:"#008597", 
            c400:"#00b2cb", 
        },
        dark: {
            c100:"",
            c200:"",
            c300:"", 
            c400:"", 
        }      
    },
    orange: {
        light: {
            c100:"#3b0e00",
            c200:"#7d1e00",
            c300:"#bf2e00", 
            c400:"#ff4000", 
        },
        dark: {
            c100:"",
            c200:"",
            c300:"", 
            c400:"", 
        }    
    }  
}