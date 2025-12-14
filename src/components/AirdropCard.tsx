'use client';

import { useState } from 'react';
import { Airdrop } from '@/data';
import { useAirdropProgress } from '@/hooks/useAirdropProgress';
import { ChevronRight, Check, ExternalLink } from 'lucide-react';

interface AirdropCardProps {
    airdrop: Airdrop;
}

export function AirdropCard({ airdrop }: AirdropCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { toggleTask, isTaskCompleted } = useAirdropProgress();

    const totalTasks = airdrop.tasks.length;
    const completedCount = airdrop.tasks.filter(t => isTaskCompleted(airdrop.id, t.id)).length;
    const progressPercent = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;
    const isComplete = progressPercent === 100;

    return (
        <div className={`group relative bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1`}>

            {/* Active Indicator Line */}
            <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div onClick={() => setIsExpanded(!isExpanded)} className="p-6 cursor-pointer">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        {/* Logo Placeholder */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-inner ${airdrop.id.includes('monad') ? 'bg-purple-900/50' :
                            airdrop.id.includes('zk') ? 'bg-blue-900/50' :
                                airdrop.id.includes('layer') ? 'bg-slate-800' :
                                    'bg-indigo-900/50'
                            }`}>
                            {airdrop.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white tracking-tight">{airdrop.name}</h3>
                            {/* Status Badge */}
                            <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${(airdrop.status.includes('Active') || airdrop.status.includes('Actif') || airdrop.status.includes('Haute') || airdrop.status.includes('Surge')) ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                (airdrop.status.includes('Upcoming') || airdrop.status.includes('Hype') || airdrop.status.includes('Early')) ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                    (airdrop.status.includes('Final') || airdrop.status.includes('Warning')) ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                        (airdrop.status.includes('Low')) ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                            'bg-slate-700/50 text-slate-400 border-slate-600/50'
                                }`}>
                                {airdrop.status}
                            </span>
                            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">{airdrop.category}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-emerald-400">{airdrop.potential}</span>
                        </div>
                    </div>
                </div>

                {/* Description - Cleaner */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                    {airdrop.description}
                </p>

                {/* Progress Miniture */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-700 ${isComplete ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                    <span className="text-xs font-medium text-slate-500">{Math.round(progressPercent)}%</span>
                </div>
            </div>

            {/* Expanded Actions - Minimalist List */}
            <div className={`bg-black/20 border-t border-white/5 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 space-y-1">
                    {airdrop.tasks.map((task) => {
                        const checked = isTaskCompleted(airdrop.id, task.id);
                        return (
                            <div key={task.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div
                                    className="flex items-center gap-3 cursor-pointer select-none"
                                    onClick={() => toggleTask(airdrop.id, task.id)}
                                >
                                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${checked
                                        ? 'bg-indigo-500 border-indigo-500 text-white'
                                        : 'border-slate-700 text-transparent group-hover/item:border-indigo-500/50'
                                        }`}>
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className={`text-sm ${checked ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
                                        {task.title}
                                    </span>
                                </div>
                                <a
                                    href={task.link}
                                    target="_blank"
                                    className="opacity-0 group-hover/item:opacity-100 transition-opacity p-2 text-indigo-400 hover:text-white"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
