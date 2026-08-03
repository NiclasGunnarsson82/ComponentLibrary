import { CSSProperties } from "react";
import scss from "./List.module.scss"
import { ListProps } from "./helpers";
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { ListItem } from "./ListItem";


export const List = ({
    itemPerPage,
    width,
    items, 
    ...props 
}: ListProps) => {
    
    const { tokens } = useComponentsProvider()

    const styles = {
        "--grid-width": "",
        "--grid-auto-flow": "",
        "--grid-gap": "",
        "--grid-min-width": "",
    } as CSSProperties

    return (
        <div
            className=""
            style={styles}
            {...props}>
                {items.length > 0 &&
                items.map((item) => {
                    return(
                        <ListItem
                            title={item.title}
                            summary={item.summary}
                            imgSrc=""
                            imgAlt=""
                            eventHandler={()=> {}}
                        />
                    )
                })}
        </div>  
    )
}
