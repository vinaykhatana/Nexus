import { useState } from 'react';
import { Bell, CheckCircle, UserPlus, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const notifications = [
    {
        id: 1,
        title: "Campaign 'Summer Sale' Approved",
        time: "2 mins ago",
        icon: <CheckCircle className="text-green-500" size={16} />,
        unread: true
    },
    {
        id: 2,
        title: "New Lead: John Doe",
        time: "1 hour ago",
        icon: <UserPlus className="text-blue-500" size={16} />,
        unread: true
    },
    {
        id: 3,
        title: "System Update Scheduled",
        time: "4 hours ago",
        icon: <Info className="text-yellow-500" size={16} />,
        unread: false
    }
];

const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-100 relative transition-colors focus:outline-none"
            >
                <Bell className="text-gray-600" size={20} />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-40 overflow-hidden"
                        >
                            <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center">
                                <h3 className="font-semibold text-gray-900">Notifications</h3>
                                <span className="text-xs text-blue-600 font-medium cursor-pointer">Mark all read</span>
                            </div>
                            <div className="max-h-80 overflow-y-auto">
                                {notifications.map((n) => (
                                    <div key={n.id} className={`px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer transition-colors ${n.unread ? 'bg-blue-50/30' : ''}`}>
                                        <div className="flex gap-3">
                                            <div className="mt-0.5">{n.icon}</div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{n.title}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{n.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="px-4 py-2 bg-gray-50 text-center border-t border-gray-100">
                                <button className="text-xs text-gray-600 font-medium hover:text-blue-600">View all notifications</button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationDropdown;
