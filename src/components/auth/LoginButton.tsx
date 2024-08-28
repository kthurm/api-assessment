import { useAuth0 } from "@auth0/auth0-react";
import Button from "../ui/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button onClick={() => loginWithRedirect()}>Sign In</Button>;
};

export default LoginButton;
