export type GeneralTokenType = {
    [token: string]: string;
}

export interface IGeneralTokens {
    [category: string]: GeneralTokenType
}

export const generalTokens: IGeneralTokens = {
    misc: {
        white: "#fffffF"
    },
    shadows: {
        buttonEnabled:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        buttonHover:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        toggleSwitchThumb:"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
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
    clickable: {
        shadowDefault: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        shadowHover: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        shadowActive: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        borderRadius: "6px",
        mMinWidth: "250px",
        mGridGap: "16px",
        padding: "8px"
    },
    chips: {
        padding: "7px 14px",
        fontSize: "14px"
    },
    slider: {
        trackHeight: "8px",
        thumbSize: "22px",
        borderRadius: "2px"
    },
    toggleSwitch: {
        height: "28px",
        width: "52px",
        borderRadius: "2px",
        thumb: "26px"
    }
}

