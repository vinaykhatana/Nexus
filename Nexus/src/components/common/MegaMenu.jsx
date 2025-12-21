import { motion, AnimatePresence } from 'framer-motion';

const MegaMenu = ({ isOpen, onClose, title, description, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop to close on click outside */}
                    <div
                        className="fixed inset-0 z-40 bg-transparent"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 overflow-hidden rounded-b-2xl"
                    >
                        <div className="max-w-7xl mx-auto flex h-96">
                            {/* Left Column: Context */}
                            <div className="w-1/3 bg-blue-50 p-10 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {description}
                                </p>
                            </div>

                            {/* Right Column: Content Grid */}
                            <div className="w-2/3 p-10 bg-white">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
