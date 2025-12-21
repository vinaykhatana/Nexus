import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Layout from '../components/common/Layout';
import { User, Shield, Activity, Save, Server, Cpu, Users } from 'lucide-react';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('edit');

    // MOCK ADMIN CHECK - In real app: user?.role === 'admin'
    // For demo, we show tab if user exists, just to verify UI.
    const isAdmin = true; // Force true for demo as requested

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                <p className="text-gray-500">Manage your personal details and system preferences.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => setActiveTab('edit')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'edit'
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <User size={18} /> Edit Profile
                    </button>
                    {isAdmin && (
                        <button
                            onClick={() => setActiveTab('admin')}
                            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'admin'
                                ? 'border-b-2 border-blue-600 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Shield size={18} /> Admin Panel
                        </button>
                    )}
                </div>

                <div className="p-8">
                    {activeTab === 'edit' && (
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
                                    {user?.name?.charAt(0) || 'U'}
                                </div>
                                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                                    Change Avatar
                                </button>
                            </div>

                            <div className="grid gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" defaultValue={user?.name} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" defaultValue={user?.email} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                    <input type="text" value="Administrator" disabled className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500" />
                                </div>
                                <div className="pt-4">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg transform hover:-translate-y-0.5">
                                        <Save size={18} /> Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'admin' && (
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Activity className="text-green-500" /> System Health Status
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Server className="text-green-600" />
                                        <span className="font-semibold text-green-900">Server Status</span>
                                    </div>
                                    <p className="text-2xl font-bold text-green-700">Online</p>
                                    <p className="text-xs text-green-600 mt-1">Uptime: 99.98%</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Cpu className="text-blue-600" />
                                        <span className="font-semibold text-blue-900">CPU Load</span>
                                    </div>
                                    <p className="text-2xl font-bold text-blue-700">12%</p>
                                    <p className="text-xs text-blue-600 mt-1">4 Cores Active</p>
                                </div>
                                <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="text-purple-600" />
                                        <span className="font-semibold text-purple-900">Active Users</span>
                                    </div>
                                    <p className="text-2xl font-bold text-purple-700">342</p>
                                    <p className="text-xs text-purple-600 mt-1">+24 today</p>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white p-6 rounded-xl font-mono text-sm max-h-64 overflow-y-auto">
                                <p className="text-green-400">$ systemctl status nexus-core</p>
                                <p className="opacity-80">● nexus-core.service - Nexus Marketing Core Engine</p>
                                <p className="opacity-80 ml-4">Loaded: loaded (/etc/systemd/system/nexus-core.service; enabled)</p>
                                <p className="opacity-80 ml-4">Active: active (running) since Sat 2025-12-21 14:00:00 UTC</p>
                                <p className="opacity-80 ml-4">Main PID: 1234 (node)</p>
                                <p className="opacity-80 ml-4">Memory: 256.4M</p>
                                <p className="text-blue-400 mt-2">$ _</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
