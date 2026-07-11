import { ReactNode, SubmitEvent } from "react";

export type FormProps =  {
    errorMessage?: string,
    width?: string,
    gap?: string,
    children: ReactNode;
    requirments?: string,
    handleSubmit: (event: SubmitEvent<HTMLFormElement>) => void,
}


