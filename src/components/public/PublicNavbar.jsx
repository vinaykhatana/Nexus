import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const PublicNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="/#home" className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    <span className="text-blue-600">Nexus</span> Marketing
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="/#home" className="text-gray-600 hover:text-blue-600 font-medium transition">Home</a>
                    <Link to="/partners" className="text-gray-600 hover:text-blue-600 font-medium transition">Become a Partner</Link>
                    <a href="/#features" className="text-gray-600 hover:text-blue-600 font-medium transition">Features</a>
                    <a href="/#faq" className="text-gray-600 hover:text-blue-600 font-medium transition">FAQ</a>
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <Link
                            to="/dashboard"
                            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5"
                        >
                            Go to Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-5 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-full transition"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/register"
                                className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4">
                    <a href="/#home" className="text-gray-700 font-medium">Home</a>
                    <Link to="/partners" className="text-gray-700 font-medium">Become a Partner</Link>
                    <Link to="/login" className="text-blue-600 font-medium">Sign In</Link>
                    <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-full text-center">Get Started</Link>
                </div>
            )}
        </nav>
    );
};

export default PublicNavbar;
