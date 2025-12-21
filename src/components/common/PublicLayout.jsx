import { Outlet } from "react-router-dom";
import PublicNavbar from "../public/PublicNavbar";
import Footer from "../public/Footer";

const PublicLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
            {/* Fixed Navbar */}
            <PublicNavbar />

            {/* Main Content Content - Pushed down by padding to avoid overlap */}
            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            {/* Footer always at bottom */}
            <Footer />
        </div>
    );
};

export default PublicLayout;
