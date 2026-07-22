import { CSSProperties, useEffect, useState } from "react";
import { useTheme } from "@/utils/ThemeContext"
import scss from "./Cards.module.scss"
import { calculateImageSize, CardDimensionsType, MasonryCardProps } from "./helpers";

export const MasonryCard = ({
    title,
    summary,
    imgSrc,
    imgAlt,
    imgPosition = "center",
    imgRatio,
    width,
    ...props 
}: MasonryCardProps) => {
  
    const { card } = useTheme()

    const styles = {
        "--card-calucated-width": width.toString()+"px",
        "--image-position": imgPosition,
        "--card-padding": card.mContentPadding,
        "--card-shadow-default": card.mCardShadowDefault,
        "--card-shadow-hover": card.mCardShadowHover,
        "--card-shadow-pressed": card.mCardShadowPressed,
        "--card-background-colour": card.mCardBackground,
        "--card-border-radius": card.borderRadius
    } as CSSProperties

    const [dimensions, setDimensions] = useState<CardDimensionsType | null>(null);
    useEffect(() => {
        const w = calculateImageSize(width, imgRatio)
        setDimensions(w)  
        return        
    }, [])

    return (
        <>
        {dimensions &&
            <div 
            className={scss.masonryCard}
            style={styles}
            {...props}>
                <img 
                    style={dimensions}
                    className={scss.image} 
                    src={imgSrc} 
                    alt={imgAlt}/>
                <div className={scss.content}>
                    <h4>{title}</h4>
                    <p>{summary}</p>
                </div>   
            </div>
        }
        </>     
    )
}
