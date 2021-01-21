import { Submit } from "../common/Button/Button.styles";

export const SubmitButton = ({
  disabled,
  text,
}: {
  disabled: boolean;
  text: string;
}) => {
  return <Submit disabled={disabled}>{text}</Submit>;
};
