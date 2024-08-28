import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

// TypeScript interface for component props
interface Auth0ProviderWithHistoryProps {
  children: React.ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({
  children,
}) => {
  // Access environment variables using import.meta.env
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  // Callback function for handling redirections after authentication
  const onRedirectCallback = (appState?: { returnTo?: string }) => {
    // Perform navigation or handle redirect
    window.location.href = appState?.returnTo || window.location.pathname;
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
