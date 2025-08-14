import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-md transition ${
      isActive ? "bg-blue-600 text-white" : "hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <span className="font-bold">My App</span>
        <NavLink to="/" end className={link}>
          Home
        </NavLink>
        <NavLink to="/about" className={link}>
          About
        </NavLink>
        <NavLink to="/dashboard" className={link}>
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
}
