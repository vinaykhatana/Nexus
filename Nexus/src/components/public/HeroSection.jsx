import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import slideAnalytics from '../../assets/slide_analytics.png';
import slideNetwork from '../../assets/slide_network.png';
import slideCampaign from '../../assets/slide_campaign.png';

const slides = [
    {
        id: 1,
        image: slideAnalytics,
        title: "Analytics Dashboard",
        sub: "Real-time insights"
    },
    {
        id: 2,
        image: slideNetwork,
        title: "Smart Matching",
        sub: "AI-driven partnerships"
    },
    {
        id: 3,
        image: slideCampaign,
        title: "Campaign Manager",
        sub: "Seamless execution"
    },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 font-semibold rounded-full text-sm mb-6 border border-blue-100"
                    >
                        🚀 The Future of E-Marketing
                    </motion.div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                        Scale Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Marketing Ecosystem
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
                    >
                        A unified platform for brand analytics, influencer collaboration, and automated campaign management.
                    </motion.p>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/register"
                            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/40 hover:bg-blue-700 transition transform hover:-translate-y-1 flex items-center gap-2"
                        >
                            Start Free Trial <ArrowRight size={20} />
                        </Link>
                        <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full border border-gray-200 hover:bg-gray-50 transition">
                            View Demos
                        </button>
                    </div>
                </motion.div>

                {/* Right Visuals (Carousel) */}
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-[600px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-10 left-10 right-10">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl font-bold text-white mb-2"
                                >
                                    {slides[currentSlide].title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-gray-200 text-lg"
                                >
                                    {slides[currentSlide].sub}
                                </motion.p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
