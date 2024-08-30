import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./auth/AuthenticationButton";

const Welcome = () => {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="mx-atuo flex flex-col justify-center items-center mt-20 rounded bg-white space-y-2 p-4">
        <h1 className="center text-3xl text-primary">Welcome</h1>
        <p className="text-xl">Please sign in to view the dashboard</p>
        <AuthenticationButton />
      </div>
    )
  );
};

export default Welcome;
