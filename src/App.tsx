import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";

import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Auth0Provider
      domain="dev-lykn8g7zkkep34m1.us.auth0.com"
      clientId="mqLCpYRyYwh8RpaKRL4HiAxNlOieV0TH"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-orange-50">
        <Dashboard />
      </div>
    </Auth0Provider>
  );
}

export default App;
