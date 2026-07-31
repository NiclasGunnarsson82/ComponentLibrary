import { CSSProperties, forwardRef, useState } from "react";
import scss from "./ToggleSwitch.module.scss"
import { ToggleSwitchProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
    ({  
        name,
        state = "default",
        errorMessage,
        stateDescriptor = false,
        required,
        ...props }, ref) => {

    const { tokens, theme } = useComponentsProvider()

    const styles = {
        "--toggle-width": tokens.toggleSwitch.width,
        "--toggle-height": tokens.toggleSwitch.height,
        "--toggle-thumb": tokens.toggleSwitch.thumb,
        "--input-colour-default": tokens.colours.inputDefault,
        "--input-colour-bg": tokens.colours.inputBackground,
        "--input-colour-success": theme.success,
        "--input-shadow": tokens.general.form.inputShadow,
        "--thumb-shadow": tokens.shadows.toggleSwitchThumb,
        "--input-font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
    } as CSSProperties

    const [ isChecked, setIsChecked ] = useState<boolean>(false)
    
    return(
        <div className={scss.wrapper}>
            <div 
                className={scss.toggleSwitch}
                style={styles}> 
                    <input
                        ref={ref}
                        onChange={() => setIsChecked(!isChecked)} 
                        type="checkbox"
                        style={styles} 
                        name={name}
                        checked={isChecked}
                        {...props}/> 
                <div
                    style={styles} 
                    className={scss.thumb}/>      
            </div> 
            {stateDescriptor 
                ? <p>{isChecked ? "On" : "Off"}</p>
                : null
            }
        </div>
        
    )
})
