import { useState } from 'react';
import { CheckCircle, Briefcase, Zap, Globe } from 'lucide-react';

const benefits = [
    {
        icon: <Zap className="text-yellow-500" size={32} />,
        title: "High Revenue Share",
        desc: "Earn up to 20% recurring commission on every client you refer to Nexus."
    },
    {
        icon: <Briefcase className="text-blue-500" size={32} />,
        title: "Exclusive Tools",
        desc: "Get access to our agency-only dashboard to manage multiple client accounts."
    },
    {
        icon: <Globe className="text-green-500" size={32} />,
        title: "Global Network",
        desc: "Connect with top-tier brands and influencers from around the world."
    }
];

const Partners = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        website: '',
        description: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Partner Application:', formData);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* Header */}
            <section className="pt-32 pb-20 bg-gray-900 text-white text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Nexus Partner</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Join our ecosystem of top agencies and solution providers. Grow your business with Nexus.
                </p>
            </section>

            {/* Benefits */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="mb-4">{b.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                            <p className="text-gray-600">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Application Form */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100/50 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Apply Now</h2>
                        <p className="text-center text-gray-600 mb-8">We review applications within 48 hours.</p>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-10">
                                <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900">Application Received!</h3>
                                <p className="text-gray-600 mt-2">We'll be in touch shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-blue-600 font-semibold hover:underline"
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                            required
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                    <input
                                        type="url"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                        placeholder="https://"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your agency</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
