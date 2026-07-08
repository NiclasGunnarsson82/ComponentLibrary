import { ButtonHTMLAttributes, KeyboardEvent, MouseEvent } from "react"

export type ButtonStateType = "default" | "loading" | "success" | "error" | "disabled"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string,
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
    width?: string,
    label: string,
    scss: Record<string, string>,
    successLabel?: string, 
    errorLabel?: string,  
}

export const configureButton = ({
    state,
    width,
    label,
    scss,
    successLabel,
    errorLabel
}: ConfigureType): ConfigType => {
    
    let config = {
        state: state,
        scss: scss.button,
        disabled: false,
        label: label,
        width: width ?? "auto"
    }

    switch (state) {
        case "default":
            config.scss = scss.button
            config.disabled = false
            break;
        case "disabled":
            config.scss = scss.button
            config.disabled = true
            break;
        case "success":
            config.scss = [scss.button,scss.isSuccess].join(" ")
            config.label = successLabel ?? "Success"
            config.disabled = true
            break;
        case "error":
            config.scss = [scss.button,scss.isError].join(" ")
            config.label = errorLabel ?? "Error"
            config.disabled = true
            break;
        case "loading":
            config.scss = [scss.button,scss.isLoading].join(" ")
            config.disabled = true
            break;
        default:
            config.scss = scss.button
            config.disabled = false
            break;
    }

    return config  
    
}
