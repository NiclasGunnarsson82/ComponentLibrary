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
    }
}

