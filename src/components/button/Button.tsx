import { CSSProperties, ButtonHTMLAttributes, MouseEvent, KeyboardEvent } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
    width?: string,
    disabled?: boolean,
    isLoading?: boolean,
    eventHandler: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
    label,
    width,
    disabled,
    isLoading,
    eventHandler,
    children,
    ...props 
}: ButtonProps) => {
  
    const { colours } = useTheme()

    //Handles disabled styling based on optional isLoading prop
    const className: string = isLoading === undefined 
        ? scss.button 
        : isLoading ? scss.isLoading : scss.button
    //Handles optional disabled prop
    const isDisabled: boolean = disabled === undefined 
        ? false 
        : isLoading ? true : disabled
    const widthValue: string = width === undefined ? "auto" : width
  
    const styles = {
        "--button-width": widthValue,
        "--button-colour-enabled": colours.blue300,
        "--button-colour-hover": colours.blue200,
        "--button-colour-focus": colours.blue300,
        "--button-colour-active": colours.blue100,
        "--button-colour-disabled": colours.blue400
    } as CSSProperties



    return (
        <button
            className={className}
            id={props.id}
            onClick={eventHandler}
            disabled={isDisabled}
            aria-label={label} 
            style={styles}>
                {/* Display loader if isLoading state is defined and set to true, else display label */}
                {isLoading !== undefined && isLoading ?
                    <span className={scss.loader}></span>
                : label}
        </button>
    )
}
