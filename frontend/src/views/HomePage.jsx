import { Link } from "react-router";
import NavBar from "../components/NavBar";
import hpImg from "../assets/snowRemoval.jpg";
import FooterNav from "../components/FooterNav";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Now booking — Winter Services
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Reliable snow removal & year-round landscaping
            </h1>
            <p className="text-gray-600 mb-6">
              Professional residential and commercial services — timely, insured,
              and tailored to your property. Get a free, no-obligation quote
              today and keep your grounds safe and beautiful all year long.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
              <Link to="/getquote" aria-label="Get a quote">
                <button
                  className="w-full sm:w-auto inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Get Quote
                </button>
              </Link>

              <Link to="/services" aria-label="View services">
                <button
                  className="w-full sm:w-auto inline-block border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium px-6 py-2 rounded focus:outline-none"
                >
                  Services
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={hpImg}
              alt="Professional landscaping and snow removal"
              className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 shadow-sm flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-semibold">Experienced Team</h3>
              <p className="text-sm text-gray-600">Trusted professionals with years of local experience.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold">Timely Service</h3>
              <p className="text-sm text-gray-600">Prompt responses and dependable scheduling for every season.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2-2 4 4M7 7h10M7 11h4" />
            </svg>
            <div>
              <h3 className="font-semibold">Transparent Pricing</h3>
              <p className="text-sm text-gray-600">Clear quotes with no hidden fees so you can plan with confidence.</p>
            </div>
          </div>
        </section>
      </main>

      <FooterNav />
    </div>
  );
}
