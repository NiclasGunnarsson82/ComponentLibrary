import { CSSProperties, forwardRef, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./ToggleSwitch.module.scss"
import { ToggleSwitchProps } from "./helpers";

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
    ({  
        name,
        state = "default",
        errorMessage,
        stateDescriptor = false,
        required,
        ...props }, ref) => {

    const { colours, font, form, toggleSwitch, shadows } = useTheme()

    const styles = {
        "--toggle-width": toggleSwitch.width,
        "--toggle-height": toggleSwitch.height,
        "--toggle-thumb": toggleSwitch.thumb,
        "--input-colour-default": colours.inputDefault,
        "--input-colour-bg": colours.inputBackground,
        "--input-colour-success": colours.success,
        "--input-shadow": form.inputShadow,
        "--thumb-shadow": shadows.toggleSwitchThumb,
        "--input-font-size": font.baseSize,
        "--font-family": font.fontfamily,
        "--font-weight": font.fontWeightRegular,
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
