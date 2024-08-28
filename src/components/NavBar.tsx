import AuthenticationButton from "./auth/AuthenticationButton";
import AuthNav from "./auth/AuthNav";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-5 border-b border-gray-50">
      <p>Vehicle Dashboard</p>
      <AuthenticationButton />
    </nav>
  );
};

export default NavBar;
