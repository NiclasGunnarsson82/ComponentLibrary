export type DesignTokensType = {
  [category: string]: {
        [token: string]: string;
  };
};

export const designTokens: DesignTokensType = {
    buttonColours: {
        enabled: "#314FA9",
        focus: "#314FA9",
        hover: "#192855",
        pressed: "#0D142B",
        disabled: "5069B6"
    }
}

