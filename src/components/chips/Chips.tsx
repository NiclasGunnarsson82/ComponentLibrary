import { CSSProperties, useState } from "react";
import scss from "./Chips.module.scss"
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { ChipsProps, ChipType } from "./helpers";
import { Chip } from "./Chip";


export const Chips = ({
    width = "100%",
    type,
    visualContainer = false,
    chips, 
    ...props 
}: ChipsProps) => {
    
    const { tokens } = useComponentsProvider()

    const [ selectedChips, setSelectedChips ] = useState<ChipType[]>([])
    const [ currentChips, setCurrentChips ] = useState<ChipType[]>(chips)

    const styles = {
        "--width": width,
        "--border-colour": tokens.theme.inputBorder,
        "--input-shadow": tokens.general.form.inputShadow,
        "--input-background": "transparent",
        "--border-radius": tokens.general.form.inputBorderRadius,
    } as CSSProperties
    
    return (
        <div
            className={`${scss.chips} ${visualContainer && scss.hasBorder}`}
            style={styles}
            {...props}>
                {currentChips.length > 0 &&
                    currentChips.map((chip) => (
                    <Chip
                        key={chip.key}
                        chip={chip}
                        type={type}
                        selectedChips={selectedChips}
                        selectableHandler={setSelectedChips}
                        removableHandler={setCurrentChips}/>
                    ))
                }   
        </div>  
    )
}
