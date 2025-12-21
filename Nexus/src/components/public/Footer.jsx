import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Nexus</h3>
                    <p className="text-sm text-gray-400">
                        Empowering brands and creators to build meaningful partnerships through technology.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Facebook className="hover:text-white cursor-pointer transition" />
                        <Twitter className="hover:text-white cursor-pointer transition" />
                        <Instagram className="hover:text-white cursor-pointer transition" />
                        <Linkedin className="hover:text-white cursor-pointer transition" />
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h4 className="text-white font-bold mb-4">Product</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Features</a></li>
                        <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition">Enterprise</a></li>
                        <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-white font-bold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition">Community</a></li>
                        <li><a href="#" className="hover:text-white transition">Support Center</a></li>
                        <li><a href="#" className="hover:text-white transition">API Documentation</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-white font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Security</a></li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-gray-800 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Nexus Marketing Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
