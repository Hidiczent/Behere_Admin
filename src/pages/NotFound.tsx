import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <Link to="/" className="text-blue-600 underline">กลับหน้าแรก</Link>
    </section>
  );
}
