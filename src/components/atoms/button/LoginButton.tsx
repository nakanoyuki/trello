import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
};
const LoginButton: FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      type="submit"
      onClick={onClick}
      isLoading={loading}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});

export default LoginButton;
