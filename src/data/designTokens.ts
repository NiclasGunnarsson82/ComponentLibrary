export type DesignTokenType = {
    [token: string]: string;
};

export interface IDesignTokens {
  [category: string]: DesignTokenType
};

export const designTokens: IDesignTokens = {
    colours: {
        blue100:"#010D18",
        blue200:"#042647",
        blue300:"#064077", 
        blue400:"#095FB2",
        success:"#06402B",
        error:"#950606"        
    },
    shadows: {
        buttonEnabled:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        buttonHover:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    }
}

