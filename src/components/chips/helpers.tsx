import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export type ChipTypeType = "selectable" | "removable"

export type ChipType = {
    label: string,
    name: string,
    value: string,
    key: string,
}

export type ChipProps = {
    chip: ChipType,
    selectedChips: ChipType[],
    type: ChipTypeType,
    selectableHandler: Dispatch<SetStateAction<ChipType[]>>,
    removableHandler: Dispatch<SetStateAction<ChipType[]>>
}

export type ChipsProps = HTMLAttributes<HTMLDivElement> & {
    width?: string,
    visualContainer?: boolean,
    type: ChipTypeType,
    chips: ChipType[] 
}

export type ChipIconProps = {
    fill?: string;
}

export const CheckIcon = ({
    fill = "white",
    }: ChipIconProps) => {
      return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={fill}
                  d="M20.285 6.709l-11.4 11.4-5.17-5.17 1.414-1.414 3.756 3.756 9.986-9.986z"
                />
          </svg>
      )
}

export const RemoveIcon = ({
    fill = "white",
    }: ChipIconProps) => {
      return (
          <svg
              width="16"
            height="16"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.881 122.88"
          >
      <g>
        <path
          fill={fill}
          d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996
          c11.119,11.118,17.996,26.479,17.996,43.444
          c0,16.967-6.877,32.326-17.996,43.444
          C93.766,116.003,78.406,122.88,61.44,122.88
          c-16.966,0-32.326-6.877-43.444-17.996
          C6.877,93.766,0,78.406,0,61.439
          c0-16.965,6.877-32.326,17.996-43.444
          C29.114,6.877,44.474,0,61.44,0z

          M80.16,37.369
          c1.301-1.302,3.412-1.302,4.713,0
          c1.301,1.301,1.301,3.411,0,4.713
          L65.512,61.444l19.361,19.362
          c1.301,1.301,1.301,3.411,0,4.713
          c-1.301,1.301-3.412,1.301-4.713,0
          L60.798,66.157L41.436,85.52
          c-1.301,1.301-3.412,1.301-4.713,0
          c-1.301-1.302-1.301-3.412,0-4.713
          l19.363-19.362L36.723,42.082
          c-1.301-1.302-1.301-3.412,0-4.713
          c1.301-1.302,3.412-1.302,4.713,0
          l19.363,19.362L80.16,37.369z

          M100.172,22.708
          C90.26,12.796,76.566,6.666,61.44,6.666
          c-15.126,0-28.819,6.13-38.731,16.042
          C12.797,32.62,6.666,46.314,6.666,61.439
          c0,15.126,6.131,28.82,16.042,38.732
          c9.912,9.911,23.605,16.042,38.731,16.042
          c15.126,0,28.82-6.131,38.732-16.042
          c9.912-9.912,16.043-23.606,16.043-38.732
          C116.215,46.314,110.084,32.62,100.172,22.708z"
        />
      </g>
    </svg>
      )
}



