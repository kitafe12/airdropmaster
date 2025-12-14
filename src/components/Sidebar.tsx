'use client';

import { useState } from 'react';
import { LayoutDashboard, Target, Settings, Zap, History, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
        { name: 'My Tracking', icon: Target, href: '#' },
        { name: 'History', icon: History, href: '#' },
        { name: 'Settings', icon: Settings, href: '#' },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Overlay Backdrop */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Aside */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-[#050505] md:bg-black/50 md:backdrop-blur-md border-r border-white/5 
                flex flex-col transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'} 
                md:translate-x-0 md:sticky md:top-0 md:h-screen md:shadow-none
            `}>
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
                            onClick={() => setIsOpen(false)} // Close on navigate (mobile)
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
        </>
    );
}
