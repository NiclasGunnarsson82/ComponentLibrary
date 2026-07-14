import { SelectHTMLAttributes } from "react"

export type SelectStateType = "default" | "error"
export type SelectOptionType = {
    option: string,
    value: string,
    optGroup?: string
}
export type SelectOptionGroupType = {
    group: string,
    options: SelectOptionType[]
}
export type CompiledOptionsType = (SelectOptionGroupType | SelectOptionType)[]
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    name: string,
    label: string,
    state?: SelectStateType,
    errorMessage?: string,
    width?: string,
    required?: boolean,
    options: SelectOptionType[],
    selected?: SelectOptionType
}

export const compileOptions = (options: SelectOptionType[]): CompiledOptionsType => {

    const optGroups: CompiledOptionsType = [];
    
    options.forEach((option) => {
        //If optGroup is undefined
        if (!option.optGroup) {
            optGroups.unshift(option)
            return
        } 

        //Does group property exist in object and is group already in the optGroups array?
        const group = optGroups.find(g => "group" in g && g.group === option.optGroup)

        //If group already exists in optGroup array, add current option
        if (group && "options" in group) {
            group.options.push(option)

        //If groups does not exist, add new optGroup object with current option
        } else {
            optGroups.push({
                group: option.optGroup,
                options: [option]
            })
        }
    })
    return optGroups
};
