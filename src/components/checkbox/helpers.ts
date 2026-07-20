import { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction } from "react"

export type CheckboxStateType = "default" | "error" 

export type CheckboxType = {
    option: string,
    value: string
}
export type CheckboxListType = {
    group: string,
    checkboxes: CheckboxType[]
}

export type CheckboxProps = {
    state: CheckboxStateType;
    required?: boolean;
    checkbox: CheckboxType
}

type BaseCheckboxProps<Key extends string, Value> =
    InputHTMLAttributes<HTMLInputElement> & {
        state: CheckboxStateType;
        selected: string[],
        setSelected: Dispatch<SetStateAction<string[]>>,
        required?: boolean,
        align?: string
    } & {
        [K in Key]: Value;
    };

export type CheckboxGroupProps = BaseCheckboxProps<"checkboxes", CheckboxListType>;

type ConfigMainCheckboxType = {
    mainIsChecked: boolean,
    class: string
}

export const configureCheckbox = (
    numberOptions: number, 
    numberSelected: number,
    scss: Record<string, string>): ConfigMainCheckboxType => {
    
    let object: ConfigMainCheckboxType = {
        mainIsChecked: false,
        class: ""
    }

    if (numberOptions == numberSelected) {
        object.mainIsChecked = true;
        object.class = scss.checkmark
    }
    if (numberSelected < numberOptions && numberSelected > 0) {
        object.mainIsChecked = true;
        object.class = scss.checkmarkPartial
    }
    if (numberSelected == 0) {
        object.mainIsChecked = false;
        object.class = scss.checkmark
    }

    return object

}

export const updateSelected = (
    event: ChangeEvent<HTMLInputElement>,
    setSelected:Dispatch<SetStateAction<string[]>>,
    selected: string[]
) => {
        const value: string = event.target.value
        const checked: boolean = event.target.checked
        if (checked && !selected.includes(value))  
            setSelected(current => [...current, value])     
        if (!checked)  
            setSelected(current => current.filter(item => item !== value))    
}

export const updateAll = (
    event: ChangeEvent<HTMLInputElement>,
    setSelected:Dispatch<SetStateAction<string[]>>,
    checkboxes: CheckboxType[]
) => {
        const checked: boolean = event.target.checked
        if (checked) {
            const all = checkboxes.map(checkbox => checkbox.value) 
            setSelected(all)  
        } else {
            setSelected([]) 
        }     
    }

export const alignClass = (
    align: string,
    scss: Record<string, string>
): string => {
    return align === "vertical" 
        ? scss.checkboxesVertical 
        : scss.checkboxesHorizontal
}

