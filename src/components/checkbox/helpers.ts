import { InputHTMLAttributes } from "react"

export type CheckboxStateType = "default" | "error" 

export type CheckboxStandaloneType = {
    option: string,
    value: string
}
export type CheckboxListType = {
    group: string,
    checkboxes: CheckboxStandaloneType[]
}

type BaseCheckboxProps<Key extends string, Value> =
    InputHTMLAttributes<HTMLInputElement> & {
        state: CheckboxStateType;
        required?: boolean;
    } & {
        [K in Key]: Value;
    };

export type CheckboxProps = BaseCheckboxProps<"checkbox", CheckboxStandaloneType>;

export type CheckboxGroupProps = BaseCheckboxProps<"checkboxes", CheckboxListType>;


