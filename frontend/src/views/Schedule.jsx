import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";
import Calender from "react-calendar"

export default function ScheduleServices() {
    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-gray-50 flex flex-col items-center pt-12 pb-20">
                <div className="w-full max-w-5xl px-6">
                    <header className="mb-6">
                        <h1 className="text-3xl font-semibold text-gray-800">Schedule your service</h1>
                        <p className="text-gray-600 mt-2">Pick a date from the calendar and we'll confirm availability. Fast, clear, and professional.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Calendar Card */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <div className="mx-auto">
                                <Calender className="w-full rounded-md" />
                            </div>
                        </div>

                        {/* Details / CTA */}
                        <aside className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <div>
                                <h2 className="text-lg font-medium text-gray-800 mb-3">Booking details</h2>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li><strong>Business hours:</strong> Mon–Sat, 8:00 AM – 6:00 PM</li>
                                    <li><strong>How it works:</strong> Select a date, add details, confirm appointment.</li>
                                    <li><strong>Cancellation:</strong> 24-hour notice requested.</li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium">
                                    Proceed to booking
                                </button>
                                <p className="text-xs text-gray-500 mt-3">Prefer to call? (555) 555-5555</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <FooterNav />
        </>
    )
}