import { Button as DsfrButton } from "@codegouvfr/react-dsfr/Button";
import "./button.css";
import { PropsWithChildren } from "react";

interface MyComponentProps extends PropsWithChildren {
  onClick: () => void;
  // isSelected: boolean;
  personalized?: string;
}

const ButtonRadius: React.FC<MyComponentProps> = ({
  children,
  onClick,
  // isSelected,
  personalized,
}) => {
  return (
    <DsfrButton
      className={` ${personalized}`}
      onClick={onClick}
      priority="primary"
      // priority={isSelected ? 'primary' : 'secondary'}
    >
      {children}
    </DsfrButton>
  );
};

export default ButtonRadius;
