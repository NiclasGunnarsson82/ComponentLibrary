import { CSSProperties } from "react";
import scss from "./Chips.module.scss"
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { Chip } from "./Chip";
import { ChipsProps } from "./helpers";


export const Chips = ({
    width = "100%",
    visualContainer = false,
    chips, 
    ...props 
}: ChipsProps) => {
    
    const { tokens } = useComponentsProvider()

    const styles = {
        "---width": width,
        "--border-colour": tokens.theme.inputBorder,
        "--input-shadow": tokens.general.form.inputShadow,
        "--input-background": "transparent",
        "--border-radius": tokens.general.form.inputBorderRadius
    } as CSSProperties

    return (
        <div
            className={`${scss.chips} ${visualContainer && scss.hasBorder}`}
            style={styles}
            {...props}>
                <h5>hfhfhf</h5>
        </div>  
    )
}
