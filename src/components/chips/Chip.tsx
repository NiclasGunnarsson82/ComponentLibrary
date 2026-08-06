import { CSSProperties } from "react";
import scss from "./Chips.module.scss"
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { ChipProps, ChipType } from "./helpers";
import checkIcon from "./icons/white-check-icon.svg";
import removeIcon from "./icons/white-remove-icon.svg";

export const Chip = ({
    chip,
    selectedChips,
    type,
    selectableHandler,
    removableHandler
}: ChipProps) => {
  
    const { tokens } = useComponentsProvider()

    const isChecked = selectedChips.includes(chip) ? true : false;
    const handleSelectedState = (chip: ChipType, selected: boolean) => {
        selectableHandler((prev) => {
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

    const disabled: boolean = type === "removable" ? true : false
    const removeChip = (chip: ChipType) => {
        removableHandler((prev) => prev.filter((c) => c.key !== chip.key))
    }

    const styles = {
        "--padding": tokens.general.chips.padding,
        "--font-family": tokens.general.font.family,
        "--checkbox-z-index": disabled ? 0 : 2, 
        "--pointer-events": disabled ? "none" : "all", 
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--font-size": tokens.general.chips.fontSize,
        "--shadow-enabled": tokens.general.shadows.buttonEnabled,
        "--shadow-hover": tokens.general.shadows.buttonHover,
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
            htmlFor={chip.name}>
                <input 
                    type="checkbox" 
                    name={chip.name}
                    checked={isChecked}
                    disabled={disabled}
                    onChange={(event) => 
                        handleSelectedState(chip, event.target.checked)}/> 

                {/* Checkmark for selectable chips which are checked */}
                {isChecked && 
                    <img src={checkIcon} style={{height: "12px", width: "12px"}}/>
                } 

                {/* The label for the chip */}
                {chip.label}

                {/* Remove icon for removable chips which are disabled */}
                {disabled && 
                    <button
                        className={scss.remove}
                        type="button"
                        aria-label="remove chip"
                        onClick={()=> removeChip(chip)}>
                            <img 
                                src={removeIcon} 
                                style={{height: "16px", width: "16px"}}/>
                    </button>
                }
        </label>    
    )
}
