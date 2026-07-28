import { HTMLAttributes } from "react"

export type GroupProps = HTMLAttributes<HTMLDivElement> & {
    width?: string
}

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
    title: string,
    desc?: string
}




