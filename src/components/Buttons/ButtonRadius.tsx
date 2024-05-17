import { Button as DsfrButton } from "@codegouvfr/react-dsfr/Button";
import './Button.css'
import { PropsWithChildren } from "react";

interface MyComponentProps extends PropsWithChildren {
    onClick: () => void;
    isSelected: boolean
  }

const ButtonRadius: React.FC<MyComponentProps> = ({ children, onClick, isSelected }) => {
    return(
        <DsfrButton
            className="personalized-button fr-mr-2w"
            onClick={onClick}
            priority= {isSelected ? "primary" : "secondary"}
            >
            {children}
        </DsfrButton>
    )
}

export default ButtonRadius
