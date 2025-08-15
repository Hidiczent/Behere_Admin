// src/components/Navbar.tsx
import { EnvelopeIcon, BellIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50 px-6 py-4 flex justify-between items-center">
      {/* Dashboard link */}
      <Link
        to="/dashboard"
        className="text-xl font-bold text-primary hover:underline"
      >
        Dashboard
      </Link>

      <div className="flex items-center gap-6">
        <EnvelopeIcon className="h-6 w-6 text-primary cursor-pointer hover:text-blue-500 transition" />
        <BellIcon className="h-6 w-6 text-primary cursor-pointer hover:text-blue-500 transition" />
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white font-bold px-3 py-1 rounded-full shadow-md">
            CH
          </div>
          <span className="text-primary font-medium">Chanaliya</span>
        </div>
      </div>
    </nav>
  );
}
