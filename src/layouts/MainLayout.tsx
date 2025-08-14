import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
