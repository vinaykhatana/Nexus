import { motion } from 'framer-motion';
import { Sparkles, BarChart2, ShieldCheck, Trello, Users, Globe } from 'lucide-react';

const features = [
    {
        icon: <Sparkles className="text-blue-600" size={32} />,
        title: "AI-Driven Matchmaking",
        desc: "Our proprietary 'Smart Match' engine analyzes millions of data points to pair your brand with influencers who actually convert."
    },
    {
        icon: <BarChart2 className="text-blue-600" size={32} />,
        title: "Real-Time Analytics",
        desc: "Watch your ROI grow. Track engagement, clicks, and conversion rates across all campaigns in a single, unified dashboard."
    },
    {
        icon: <ShieldCheck className="text-blue-600" size={32} />,
        title: "Secure Escrow Payments",
        desc: "Never worry about fraud. Payments are held in secure escrow and released only when campaign deliverables are met."
    },
    {
        icon: <Trello className="text-blue-600" size={32} />,
        title: "Kanban Campaign Manager",
        desc: "Move from 'Planning' to 'Live' effortlessly. Our drag-and-drop tools make managing complex timelines simple."
    },
    {
        icon: <Users className="text-blue-600" size={32} />,
        title: "Audience Demographics",
        desc: "Know who you are reaching. Get deep insights into age, location, and interests of the audiences engaging with your brand."
    },
    {
        icon: <Globe className="text-blue-600" size={32} />,
        title: "Multi-Platform Support",
        desc: "Seamlessly integrate campaigns across Instagram, YouTube, TikTok, and Twitter from one central hub."
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        A Source to Grow Your Digital Capabilities
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to build, manage, and scale your influencer marketing campaigns.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
