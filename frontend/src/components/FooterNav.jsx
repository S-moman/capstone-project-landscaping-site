import { Link } from "react-router";
import { UserContext } from "./App";
import { useContext } from "react";

export default function FooterNav() {
  const { user, setUser } = useContext(UserContext);
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 border-t shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* simple text logo */}
          <div className="rounded-full w-10 h-10 bg-green-600 flex items-center justify-center text-white font-bold">
            MI
          </div>
          <div className="text-sm text-gray-700">
            <div className="font-medium">Moment Investors Landscaping LLC</div>
            <div className="text-xs text-gray-500">© 2024</div>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-4">
          <Link to={user ? "/schedule" : "/services"} className="text-sm text-gray-600 hover:text-green-700 transition">
            {user ? "Schedule Service" : "Services"}
          </Link>
          <Link to="/careers" className="text-sm text-gray-600 hover:text-green-700 transition">
            Careers
          </Link>
          <Link to="/contact" className="text-sm text-gray-600 hover:text-green-700 transition">
            Contact
          </Link>
          {!user && (
            <Link to="/getquote" className="text-sm text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700 transition">
              Get Quote
            </Link>
          )}
        </nav>

        <div className="text-xs text-gray-500">
          <div>Licensed & Insured</div>
        </div>
      </div>
    </footer>
  );
}
