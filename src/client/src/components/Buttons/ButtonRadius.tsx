import { Button as DsfrButton } from "@codegouvfr/react-dsfr/Button";
import "./button.css";
import { PropsWithChildren } from "react";

interface MyComponentProps extends PropsWithChildren {
  onClick: () => void;
  personalized?: string;
}

const ButtonRadius: React.FC<MyComponentProps> = ({
  children,
  onClick,
  personalized,
}) => {
  return (
    <DsfrButton
      className={`${personalized}`}
      onClick={onClick}
      priority="primary"
    >
      {children}
    </DsfrButton>
  );
};

export default ButtonRadius;
