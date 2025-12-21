import PublicNavbar from "../components/public/PublicNavbar";
import Footer from "../components/public/Footer";

const LearnPage = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Marketer Hub</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Resources, guides, and insights to help you grow your business.
            </p>
            <div className="mt-12 p-12 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-gray-500 italic">Academy content coming soon...</p>
            </div>
        </div>
    );
};

export default LearnPage;
