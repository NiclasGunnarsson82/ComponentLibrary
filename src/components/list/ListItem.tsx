import { CSSProperties, useEffect, useState } from "react";
import scss from "./Cards.module.scss"
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
        "--card-padding": tokens.general.card.mContentPadding,
        "--card-shadow-default": tokens.general.card.mCardShadowDefault,
        "--card-shadow-hover": tokens.general.card.mCardShadowHover,
        "--card-shadow-active": tokens.general.card.mCardShadowActive,
        "--card-background-colour": tokens.general.card.mCardBackground,
        "--card-border-radius": tokens.general.card.borderRadius
    } as CSSProperties

    return (
        <div 
            className=""
            style={styles}
            onClick={eventHandler}>
                <div className="">
                    <h4>{title}</h4>
                    <p>{summary}</p>
                </div>   
        </div>    
    )
}
