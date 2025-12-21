import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { User, Building, CreditCard, Save } from "lucide-react";

const Settings = () => {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                {['profile', 'company', 'subscription'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${activeTab === tab
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Content Content */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-4xl">
                {activeTab === 'profile' && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold border-4 border-white shadow-sm hover:shadow-md transition cursor-pointer">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Profile Photo</h3>
                                <p className="text-sm text-gray-500">Click to upload a new avatar</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input type="text" defaultValue={user?.name} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" defaultValue={user?.email} disabled className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                                <input type="text" placeholder="e.g. Marketing Manager" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'company' && (
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                <input type="text" placeholder="Nexus Corp" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>E-Commerce</option>
                                    <option>SaaS</option>
                                    <option>Agency</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                <input type="url" placeholder="https://example.com" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'subscription' && (
                    <div className="space-y-8">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    Current Plan: Enterprise <span className="px-2 py-0.5 bg-blue-200 text-blue-800 text-xs rounded-full">Active</span>
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Next billing date: Jan 1, 2026</p>
                            </div>
                            <button className="text-blue-700 font-medium hover:underline">Manage Billing</button>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-900 mb-4">Payment Method</h4>
                            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                                <CreditCard size={24} className="text-gray-400" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Visa ending in 4242</p>
                                    <p className="text-xs text-gray-500">Expires 12/28</p>
                                </div>
                                <button className="ml-auto text-sm text-gray-500 hover:text-gray-900">Edit</button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                    <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-lg transform hover:-translate-y-0.5">
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
