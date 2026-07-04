import { ButtonHTMLAttributes, ReactNode } from "react";
import { useTheme } from "@/utils/ThemeContext"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: string;
    children: ReactNode;
}

export const Button = ({
    children, 
    ...props }: ButtonProps) => {
  
    const { buttonColours } = useTheme()
  
    const styles = {
        background: buttonColours.enabled,
        color: "#FFFFF",
        '&:hover' : {
            background: buttonColours.hover,
        },
        '&:disabled' : {
            background: buttonColours.disabled,
        },
        '&:active' : {
            background: buttonColours.pressed,
        },
        '&:focus' : {
            background: buttonColours.focus,
        }
    }

    return (
        <button 
            style={styles} {...props}>
            {children}
        </button>
    )
}
