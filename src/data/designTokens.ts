export type DesignTokenType = {
    [token: string]: string;
};

export interface IDesignTokens {
  [category: string]: DesignTokenType
};

export const designTokens: IDesignTokens = {
    buttonColours: {
        enabled: "#314FA9",
        focus: "#314FA9",
        hover: "#192855",
        pressed: "#0D142B",
        disabled: "#5069B6"
    }
}

