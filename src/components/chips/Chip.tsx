import { CSSProperties, useEffect, useState } from "react";
import scss from "./Chips.module.scss"
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { ChipType } from "./helpers";

export const Chip = ({
    label,
    name,
    value,
    eventHandler,
}: ChipType) => {
  
    const { tokens } = useComponentsProvider()

    const styles = {
        "--padding": tokens.general.chips.padding,
        "--font-family": tokens.general.font.family,
        "--font-weight": tokens.general.font.fontWeightBold,
        "--font-size": tokens.general.chips.fontSize,
        "--shadow-default": tokens.general.card.mCardShadowDefault,
        "--shadow-hover": tokens.general.card.mCardShadowHover,
        "--shadow-active": tokens.general.card.mCardShadowActive,
        "--border-radius": tokens.general.form.inputBorderRadius,
        "--colour-enabled": tokens.colours.c300,
        "--colour-hover": tokens.colours.c200,
        "--colour-focus": tokens.colours.c300,
        "--colour-active": tokens.colours.c100,
        "--colour-label": tokens.general.misc.white
    } as CSSProperties

    return (
        <label 
            className={scss.chip}
            style={styles}
            htmlFor={name}>
                <input 
                    type="checkbox" 
                    name={name} 
                    value={value}/> 
                {label}
        </label>    
    )
}
