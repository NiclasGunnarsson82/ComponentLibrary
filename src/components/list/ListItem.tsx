import { CSSProperties, useEffect, useState } from "react";
import scss from "./List.module.scss"
import { useComponentsProvider } from "@/utils/ComponentsContext";
import { ListItemType } from "./helpers";

export const ListItem = ({
    title,
    summary,
    imgSrc,
    imgAlt,
    eventHandler
}: ListItemType) => {
  
    const { tokens } = useComponentsProvider()

    const styles = {
        "--card-padding": tokens.general.clickable.padding,
        "--shadow-default": tokens.general.clickable.shadowDefault,
        "--shadow-hover": tokens.general.clickable.shadowHover,
        "--shadow-active": tokens.general.clickable.shadowActive,
        "--background-colour": tokens.general.theme.inputBackground,
        "--border-radius": tokens.general.clickable.borderRadius
    } as CSSProperties

    return (
        <div 
            className={scss.item}
            style={styles}
            onClick={eventHandler}>
                <img src={imgSrc} alt={imgAlt} />
                <div>
                    <h4>{title}</h4>
                    <p>{summary}</p>
                </div>   
        </div>    
    )
}
