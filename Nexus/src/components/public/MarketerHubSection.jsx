import { Handshake, Users, LayoutGrid, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MarketerHubSection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The Nexus Marketer Hub</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Connect, collaborate, and grow with the world's most advanced marketing ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                        <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Handshake className="text-green-400" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Become a Partner</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Join our prestigious agency network and get exclusive access to enterprise leads and tools.
                        </p>
                        <Link to="/partners" className="flex items-center text-green-400 font-semibold group-hover:gap-2 transition-all">
                            Apply Now <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Users className="text-purple-400" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Find an Expert</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Need help? Hire certified Nexus experts to run your campaigns and optimize your ROI.
                        </p>
                        <Link to="/partners" className="flex items-center text-purple-400 font-semibold group-hover:gap-2 transition-all">
                            Browse Directory <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                        <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <LayoutGrid className="text-orange-400" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Partner Gallery</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Explore success stories and case studies from top brands using the Nexus Marketing Cloud.
                        </p>
                        <Link to="/learn" className="flex items-center text-orange-400 font-semibold group-hover:gap-2 transition-all">
                            View Showcase <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link
                        to="/register"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Join the Community
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MarketerHubSection;
