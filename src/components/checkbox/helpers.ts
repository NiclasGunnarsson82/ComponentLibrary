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


