import { Dispatch, InputHTMLAttributes, SetStateAction } from "react"

export type CheckboxStateType = "default" | "error" 

export type CheckboxStandaloneType = {
    option: string,
    value: string
}
export type CheckboxListType = {
    group: string,
    checkboxes: CheckboxStandaloneType[]
}

export type CheckboxProps = {
    state: CheckboxStateType;
    required?: boolean;
    checkbox: CheckboxStandaloneType
}

type BaseCheckboxProps<Key extends string, Value> =
    InputHTMLAttributes<HTMLInputElement> & {
        state: CheckboxStateType;
        selected: string[],
        setSelected: Dispatch<SetStateAction<string[]>>,
        required?: boolean;
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

