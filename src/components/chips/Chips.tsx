import { CSSProperties, useState } from "react";
import scss from "./Chips.module.scss"
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { ChipsProps, ChipType } from "./helpers";
import { Chip } from "./Chip";


export const Chips = ({
    width = "100%",
    visualContainer = false,
    chips, 
    ...props 
}: ChipsProps) => {
    
    const { tokens } = useComponentsProvider()

    const [ selectedChips, setSelectedChips ] = useState<ChipType[]>([])

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
                {chips.length > 0 &&
                    chips.map((chip) => (
                    <Chip
                        key={chip.key}
                        chip={chip}
                        selectedChips={selectedChips}
                        eventHandler={setSelectedChips}/>
                    ))
                }   
        </div>  
    )
}
