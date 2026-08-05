import { CSSProperties } from "react";
import scss from "./Chips.module.scss"
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { ChipProps, ChipType } from "./helpers";
import checkIcon from "./icons/white-check-icon.svg";

export const Chip = ({
    chip,
    selectedChips,
    eventHandler,
}: ChipProps) => {
  
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

    const handleSelectedState = (chip: ChipType, selected: boolean) => {
        eventHandler((prev) => {
            const currentChips = [...prev]
            //If chip i selected and not in the state, add it:
            if (selected) {
                if (!currentChips.some((c) => c.key === chip.key)) {
                    currentChips.push(chip)
                }
            } else {
                //If chip is not selected and in the state, remove it: 
                return currentChips.filter((c) => c.key !== chip.key)
            }
            return currentChips
        })
    }

    const isChecked = selectedChips.includes(chip) ? true : false;
    
    return (
        <label 
            className={scss.chip}
            style={styles}
            htmlFor={chip.name}>
                
                <input 
                    type="checkbox" 
                    name={chip.name}
                    checked={isChecked}
                    onChange={(event) => 
                        handleSelectedState(chip, event.target.checked)}/> 
                {isChecked && 
                    <img src={checkIcon} style={{height: "12px", width: "12px"}}alt="" />
                } {chip.label}
        </label>    
    )
}
