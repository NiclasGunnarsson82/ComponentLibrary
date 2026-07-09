import { ClipboardEvent, InputHTMLAttributes } from "react"

export type InputStateType = "default" | "error"
export type InputTypeType = "text" | "password" | "email" |"number" |
"tel" | "url" | "search" | "hidden"
export type AutoCompleteType =
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level1"
  | "address-level2"
  | "address-level3"
  | "address-level4"
  | "street-address"
  | "country"
  | "country-name"
  | "postal-code"
  | "name"
  | "additional-name"
  | "family-name"
  | "given-name"
  | "honoric-prefix"
  | "honoric-suffix"
  | "nickname"
  | "organization-title"
  | "username"
  | "new-password"
  | "current-password"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "one-time-code"
  | "organization"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transaction-amount"
  | "language"
  | "url"
  | "email"
  | "photo"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-area-code"
  | "tel-local"
  | "tel-local-prefix"
  | "tel-local-suffix"
  | "tel-extension"
  | "impp"

  export type InputModeType =
  | "decimal"
  | "email"
  | "none"
  | "numeric"
  | "search"
  | "tel"
  | "text"
  | "url"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    type: string,
    name: string,
    label: string,
    state: InputStateType,
    width?: string,
    required?: boolean,
    placeholder?: string,
    onCopy?: (event: ClipboardEvent<HTMLInputElement>) => void,
    onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void,
    spellCheck?: boolean,
    language?: string,
    autoComplete?: AutoCompleteType,
    inputMode?: InputModeType
}


