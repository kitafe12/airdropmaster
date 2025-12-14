import { LayoutDashboard, Target, Settings, Zap, History } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
        { name: 'My Tracking', icon: Target, href: '#' },
        { name: 'History', icon: History, href: '#' },
        { name: 'Settings', icon: Settings, href: '#' },
    ];

    return (
        <aside className="w-64 h-screen bg-black/50 backdrop-blur-md border-r border-white/5 flex flex-col sticky top-0 z-50">
            {/* Brand */}
            <div className="p-8 pb-10">
                <div className="flex items-center gap-3 mb-1">
                    <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg shadow-indigo-500/30">
                        <Zap className="text-white w-5 h-5" />
                    </div>
                    <h1 className="text-lg font-bold tracking-wide text-white">
                        Airdrop<span className="text-slate-500 font-normal">Master</span>
                    </h1>
                </div>
            </div>

            {/* Nav */}
            <nav className="px-4 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${item.name === 'Dashboard'
                                ? 'bg-white/10 text-white shadow-inner'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <item.icon className={`w-4 h-4 ${item.name === 'Dashboard' ? 'text-indigo-400' : ''}`} />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* Footer / User Profile Area */}
            <div className="mt-auto p-6 border-t border-white/5">
                <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
                    <div>
                        <p className="text-xs font-semibold text-white">Default User</p>
                        <p className="text-[10px] text-slate-400">Pro Plan</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
