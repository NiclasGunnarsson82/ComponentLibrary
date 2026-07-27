import { ButtonHTMLAttributes, MouseEvent } from "react"

export type ButtonStateType = "default" | "loading" | "success" | "error" | "disabled"
export type ButtonStyleType = "primary" | "secondary" 

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
    style: ButtonStyleType,
    state: ButtonStateType,
    width?: string,
    errorLabel?: string,
    successLabel?: string,
    eventHandler: (event: MouseEvent<HTMLButtonElement>) => void
}

export type ConfigType = {
    state: ButtonStateType,
    width: string,
    label: string,
    scss: string,
    disabled: boolean
}

export type ConfigureType = {
    state: ButtonStateType,
    style: ButtonStyleType,
    width?: string,
    label: string,
    scss: Record<string, string>,
    successLabel?: string, 
    errorLabel?: string,  
}

export const configureButton = ({
    state,
    style,
    width,
    label,
    scss,
    successLabel,
    errorLabel
}: ConfigureType): ConfigType => {
    
    let config = {
        state: state,
        style: style,
        scss: scss.button,
        disabled: false,
        label: label,
        width: width ?? "auto"
    }

    let styleClass = style === "primary" ? scss.primary : scss.secondary 

    switch (state) {
        case "default":
            config.scss = styleClass
            config.disabled = false
            break;
        case "disabled":
            config.scss = styleClass
            config.disabled = true
            break;
        case "success":
            config.scss = [styleClass,scss.isSuccess].join(" ")
            config.label = successLabel ?? "Success"
            config.disabled = true
            break;
        case "error":
            config.scss = [styleClass,scss.isError].join(" ")
            config.label = errorLabel ?? "Error"
            config.disabled = true
            break;
        case "loading":
            config.scss = [styleClass,scss.isLoading].join(" ")
            config.disabled = true
            break;
    }

    return config  
    
}
