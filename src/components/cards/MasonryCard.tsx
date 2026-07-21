import { CSSProperties } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Cards.module.scss"
import { MasonryCardProps } from "./helpers";

export const MasonryCard = ({
    title,
    summary,
    imgSrc,
    ...props 
}: MasonryCardProps) => {
  
    const { cards } = useTheme()

    const styles = {
        "--card-shadow-default": cards.mCardShadowDefault,
        "--card-shadow-hover": cards.mCardShadowHover,
        "--card-shadow-pressed": cards.mCardShadowPressed,
        "--card-background-colour": cards.mCardBackground,
        "--card-border-radius": cards.borderRadius
    } as CSSProperties

    return (
        <div 
            className={scss.masonryCard}
            style={styles}
            {...props}>
                <img src={imgSrc} alt="" />
                <h4>{title}</h4>
                <p>{summary}</p>
        </div>
    )
}
