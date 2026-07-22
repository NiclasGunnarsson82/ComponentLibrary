import { CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Cards.module.scss"
import { MasonryCardProps } from "./helpers";

export const MasonryCard = ({
    title,
    summary,
    imgSrc,
    imgAlt,
    imgRatio,
    width,
    ...props 
}: MasonryCardProps) => {
  
    const { card } = useTheme()

    const styles = {
        "--card-calucated-width": "auto",
        "--card-padding": card.mContentPadding,
        "--card-shadow-default": card.mCardShadowDefault,
        "--card-shadow-hover": card.mCardShadowHover,
        "--card-shadow-pressed": card.mCardShadowPressed,
        "--card-background-colour": card.mCardBackground,
        "--card-border-radius": card.borderRadius
    } as CSSProperties

    return (
        <div 
            className={scss.masonryCard}
            style={styles}
            {...props}>
                <img 
                    className={scss.image} 
                    src={imgSrc} 
                    alt={imgAlt}/>
                <div className={scss.content}>
                    <h4>{title}</h4>
                    <p>{summary}</p>
                </div>   
        </div>
    )
}
