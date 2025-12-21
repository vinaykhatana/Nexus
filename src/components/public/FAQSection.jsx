import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How does the Smart Match algorithm work?",
        answer: "It uses Natural Language Processing (NLP) to scan influencer content tags and audience sentiment, ensuring a perfect brand alignment."
    },
    {
        question: "Is there a free trial for brands?",
        answer: "Yes! Every brand gets a 14-day Pro trial to explore our analytics suite and influencer database."
    },
    {
        question: "How are payments handled?",
        answer: "We use Stripe Connect for secure, instant transfers. Funds are protected until you approve the work."
    },
    {
        question: "Can I export my campaign data?",
        answer: "Absolutely. Export comprehensive PDF or CSV reports for your stakeholders with one click."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about the Nexus platform.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="text-blue-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                            <div className="pt-4 border-t border-gray-100">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
