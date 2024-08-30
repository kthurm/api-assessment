import "./App.css";
import AuthenticationButton from "./components/auth/AuthenticationButton";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col font-sans">
      <NavBar />
      <Welcome />
      <Dashboard />
    </div>
  );
}

export default App;
