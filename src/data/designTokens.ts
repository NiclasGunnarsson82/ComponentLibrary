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
        error:"#950606",
        inputDefault: "#898989"        
    },
    shadows: {
        buttonEnabled:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        buttonHover:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    },
    font: {
        baseSize: "16px",
        fontFamily: "inherit",
        fontWeightRegular: "400",
        fontWeightBold: "700",
    },
    form: {
        minWidth: "275px",
        inputDefaultWidth: "100%",
        inputPadding: "6px 8px",
        inputHeight: "40px",
        checkboxWidth: "22px",
        checkboxHeight: "22px",
        radioWidth: "22px",
        radioHeight: "22px",
        inputBorderRadius: "6px",
        formPadding: "6px 8px",
        formDefaultGap: "15px",
        padding: "10px 10px",
        inputShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5)"
    },
    borders: {
        buttonBorderRadius: "6px"
    },
}

