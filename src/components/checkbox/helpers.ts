import { InputHTMLAttributes } from "react"

export type CheckboxStateType = "default" | "error" 

export type CheckboxStandaloneType = {
    option: string,
    value: string
}
export type CheckboxListType = {
    checkboxes: CheckboxStandaloneType[]
}
export type CheckboxNestedType = {
    group: string,
    checkboxes: CheckboxStandaloneType[]
}

type BaseCheckboxProps<Key extends string, Value> =
    InputHTMLAttributes<HTMLInputElement> & {
        name: string;
        label: string;
        state: CheckboxStateType;
        required?: boolean;
    } & {
        [K in Key]: Value;
    };

export type CheckboxProps = BaseCheckboxProps<"checkbox", CheckboxStandaloneType>;

export type CheckboxListProps = BaseCheckboxProps<"checkboxes", CheckboxListType>;

export type NestedCheckboxProps = BaseCheckboxProps<"checkboxes", CheckboxNestedType>;

