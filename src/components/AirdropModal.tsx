'use client';

import { Airdrop } from '@/data';
import { useAirdropProgress } from '@/hooks/useAirdropProgress';
import { X, Check, ExternalLink } from 'lucide-react';

interface AirdropModalProps {
    airdrop: Airdrop;
    onClose: () => void;
}

export function AirdropModal({ airdrop, onClose }: AirdropModalProps) {
    const { toggleTask, isTaskCompleted } = useAirdropProgress();

    const totalTasks = airdrop.tasks.length;
    const completedCount = airdrop.tasks.filter(t => isTaskCompleted(airdrop.id, t.id)).length;
    const progressPercent = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;
    const isComplete = progressPercent === 100;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
                {/* Header Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                    {/* Header Info */}
                    <div className="flex items-start gap-5 mb-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg ${airdrop.id.includes('monad') ? 'bg-purple-900/50' :
                                airdrop.id.includes('zk') ? 'bg-blue-900/50' :
                                    airdrop.id.includes('layer') ? 'bg-slate-800' :
                                        'bg-indigo-900/50'
                            }`}>
                            {airdrop.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1 pt-1">
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-1">{airdrop.name}</h2>
                            <div className="flex items-center gap-3">
                                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${(airdrop.status.includes('Active') || airdrop.status.includes('High') || airdrop.status.includes('Priority') || airdrop.status.includes('Surge')) ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                        (airdrop.status.includes('Upcoming') || airdrop.status.includes('Hype') || airdrop.status.includes('Max') || airdrop.status.includes('Early')) ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                            (airdrop.status.includes('Final') || airdrop.status.includes('Warning')) ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                                (airdrop.status.includes('Low')) ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                    'bg-slate-700/50 text-slate-400 border-slate-600/50'
                                    }`}>
                                    {airdrop.status}
                                </span>
                                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{airdrop.category}</span>
                            </div>
                        </div>
                        <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                            <span className="text-sm font-semibold text-emerald-400">{airdrop.potential}</span>
                        </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed font-light mb-8">
                        {airdrop.description}
                    </p>

                    {/* Checkbox List */}
                    <div className="space-y-2 mb-8">
                        {airdrop.tasks.map((task) => {
                            const checked = isTaskCompleted(airdrop.id, task.id);
                            return (
                                <div key={task.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors group">
                                    <div
                                        className="flex items-center gap-4 cursor-pointer select-none flex-1"
                                        onClick={() => toggleTask(airdrop.id, task.id)}
                                    >
                                        <div className={`flex-shrink-0 w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${checked
                                                ? 'bg-indigo-500 border-indigo-500 text-white'
                                                : 'border-slate-700 bg-black/20 text-transparent group-hover:border-indigo-500/50'
                                            }`}>
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className={`text-sm font-medium ${checked ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                                            {task.title}
                                        </span>
                                    </div>
                                    <a
                                        href={task.link}
                                        target="_blank"
                                        className="p-2 text-indigo-400 hover:text-white opacity-70 hover:opacity-100 transition-opacity"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                    {/* Large Progress Bar */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Progress</span>
                            <span className="text-xs font-bold text-indigo-400">{Math.round(progressPercent)}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-700 ${isComplete ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`}
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
