import { HTMLAttributes, MouseEvent } from "react"

export type ListItemType = {
    title: string,
    summary: string,
    imgSrc: string,
    imgAlt: string,
    eventHandler: (event: MouseEvent<HTMLDivElement>) => void
}

export type ListProps = HTMLAttributes<HTMLDivElement> & {
    itemPerPage: number,
    width: number,
    items: ListItemType[] 
}



