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
        backgroundColor: ""
    }

    return (
        <button style={styles} {...props}>
            {children}
        </button>
    )
}
