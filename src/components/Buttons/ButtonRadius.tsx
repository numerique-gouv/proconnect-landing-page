import { Button as DsfrButton } from "@codegouvfr/react-dsfr/Button";
import './Button.css'
import { PropsWithChildren } from "react";

function Button({ children }: PropsWithChildren){
    return(
        <DsfrButton
            className="personalized-button fr-mr-2w"
            onClick={function noRefCheck(){}}
            priority="secondary"
            >
            {children}
        </DsfrButton>
    )
}

export default Button
