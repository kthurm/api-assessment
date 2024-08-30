import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div className="w-screen h-screen flex flex-col font-sans">
      {error && <p>Authenication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <NavBar />
          <Welcome />
          <Dashboard />
        </>
      )}
    </div>
  );
}

export default App;
