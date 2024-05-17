import { Button as DsfrButton } from "@codegouvfr/react-dsfr/Button";
import './Button.css'
import { PropsWithChildren } from "react";

interface MyComponentProps extends PropsWithChildren {
    onClick: () => void;
    isSelected: boolean;
    personalized?: string;
  }

const ButtonRadius: React.FC<MyComponentProps> = ({ children, onClick, isSelected, personalized }) => {
    return(
        <DsfrButton
            className={`personalized-button ${personalized}`}
            onClick={onClick}
            priority= {isSelected ? "primary" : "secondary"}
            >
            {children}
        </DsfrButton>
    )
}

export default ButtonRadius
