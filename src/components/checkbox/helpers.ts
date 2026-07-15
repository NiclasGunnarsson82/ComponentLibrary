import { InputHTMLAttributes } from "react"

export type CheckboxStateType = "default" | "error" 

export type CheckboxStandaloneType = {
    label: string,
    value: string
}
export type CheckboxListType = {
    checkboxes: CheckboxStandaloneType[]
}
export type CheckboxNestedType = {
    group: string,
    options: CheckboxStandaloneType[]
}

type BaseCheckboxProps<Options> = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    state: CheckboxStateType;
    required?: boolean;
    options: Options;
};

export type CheckboxProps = BaseCheckboxProps<CheckboxStandaloneType>;

export type CheckboxListProps = BaseCheckboxProps<CheckboxListType>;

export type NestedCheckboxProps = BaseCheckboxProps<CheckboxNestedType>;

