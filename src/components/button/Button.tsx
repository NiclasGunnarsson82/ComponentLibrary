import { CSSProperties, ButtonHTMLAttributes } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
    disabled?: boolean
}

export const Button = ({
    children, 
    ...props }: ButtonProps) => {
  
    const { colours } = useTheme()
  
    const styles = {
        "--button-colour-enabled": colours.blue300,
        "--button-colour-hover": colours.blue200,
        "--button-colour-focus": colours.blue300,
        "--button-colour-active": colours.blue100,
        "--button-colour-disabled": colours.blue400
    } as CSSProperties

    return (
        <button
            disabled={false}
            className={scss.button}
            id={props.id}
            aria-label={props["aria-label"]} 
            style={styles}>
            {props.label}
        </button>
    )
}
