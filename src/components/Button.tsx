import { ButtonHTMLAttributes, ReactNode } from "react";
import { useTheme } from "@/utils/ThemeContext"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: string;
    children: ReactNode;
}

export const Button = ({
    children, 
    ...props }: ButtonProps) => {
  
    const { designTokens } = useTheme()
  
    const styles = {
        background: designTokens.buttonColours.enabled,
        color: "#FFFFF",
        '&:hover' : {
            background: designTokens.buttonColours.hover,
        },
        '&:disabled' : {
            background: designTokens.buttonColours.disabled,
        },
        '&:active' : {
            background: designTokens.buttonColours.pressed,
        },
        '&:focus' : {
            background: designTokens.buttonColours.focus,
        }
    }

    return (
        <button 
            style={styles} {...props}>
            {children}
        </button>
    )
}
