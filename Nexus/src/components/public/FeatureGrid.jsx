import { BarChart3, Users, Send, Target, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <BarChart3 className="text-blue-600" size={32} />,
        title: "Advanced Analytics",
        desc: "Track ROI, engagement, and reach in real-time with enterprise-grade dashboards."
    },
    {
        icon: <Users className="text-purple-600" size={32} />,
        title: "Smart Matching",
        desc: "Our AI algorithm finds the perfect influencer partners for your specific niche."
    },
    {
        icon: <Send className="text-green-600" size={32} />,
        title: "Campaign Manager",
        desc: "Launch, manage, and scale multiple campaigns from a single unified interface."
    },
    {
        icon: <Target className="text-red-600" size={32} />,
        title: "Targeted Leads",
        desc: "Precision targeting to reach the audience that matters most to your brand."
    },
    {
        icon: <Shield className="text-indigo-600" size={32} />,
        title: "Secure Payments",
        desc: "Escrow-style payments ensure safety for both brands and creators."
    },
    {
        icon: <Zap className="text-yellow-600" size={32} />,
        title: "Instant Collaboration",
        desc: "Chat, share files, and approve content directly within the platform."
    }
];

const FeatureGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
