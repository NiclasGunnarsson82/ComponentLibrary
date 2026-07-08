export type ButtonConfigType = {
    scss: string,
    loading: boolean, 
    success: boolean, 
    error: boolean, 
    disabled: boolean,
    width: string,
    label: string    
}


export type ConfigureType = {
    label: string,
    scss: Record<string, string>,
    width: string | undefined
    isLoading: boolean | undefined, 
    isSuccess: boolean | undefined,
    successLabel: string | undefined, 
    isError: boolean | undefined,
    errorLabel: string | undefined, 
    isDisabled: boolean | undefined    
}

export type ConfigType = {
    disabled: boolean,
    label: string,
    width: string,
    scss: string
}

export const configureButton = ({
    label,
    scss,
    width,
    isLoading,
    isSuccess,
    successLabel,
    isError,
    errorLabel,
    isDisabled
}: ConfigureType): ConfigType => {
    
    let loading: boolean = isLoading === undefined ? false : isLoading
    let success: boolean = isSuccess === undefined ? false : isSuccess
    let error: boolean = isError === undefined ? false : isError
    let disabled: boolean = isDisabled === undefined ? false: isDisabled

    let config = {
        scss: scss.button,
        disabled: disabled,
        label: label,
        width: "auto"
    }

    if (loading) {
        config.scss = scss.isLoading
    } else if (success) {
        config.scss = scss.isSuccess
    } else if (error) {
        config.scss = scss.isError
    } else {
        config.scss = scss.button
    }

    if (loading) {
        config.disabled = true
    } else if (error) {
        config.disabled = true
    } else if (success) {
        config.disabled = true
    } 

    if (error) {
        errorLabel === undefined 
        ? config.label = "Error" 
        : config.label = errorLabel} 
    else if (success) {
        successLabel === undefined 
        ? config.label = "Success" 
        : config.label = successLabel} 

    config.width = width === undefined ? "auto" : width

    return config
    
}
