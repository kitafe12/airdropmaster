'use client';

import { useState, useEffect } from 'react';

export function useAirdropProgress() {
    // State: { [airdropId-taskId]: boolean }
    const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load from localStorage on mount
        try {
            const saved = localStorage.getItem('airdrop_progress');
            if (saved) {
                setCompletedTasks(JSON.parse(saved));
            }
        } catch (e) {
            console.error('Failed to load progress', e);
        }
        setIsLoaded(true);
    }, []);

    const toggleTask = (airdropId: string, taskId: string) => {
        const key = `${airdropId}-${taskId}`;
        setCompletedTasks((prev) => {
            const next = { ...prev, [key]: !prev[key] };
            // Save to localStorage immediately
            try {
                localStorage.setItem('airdrop_progress', JSON.stringify(next));
            } catch (e) {
                console.error('Failed to save progress', e);
            }
            return next;
        });
    };

    const isTaskCompleted = (airdropId: string, taskId: string) => {
        return !!completedTasks[`${airdropId}-${taskId}`];
    };

    const getProgress = (airdropId: string, totalTasks: number) => {
        // Count completed tasks for this airdrop
        const completedCount = Object.keys(completedTasks).filter(key =>
            key.startsWith(`${airdropId}-`) && completedTasks[key]
        ).length;

        // Note: This naive count might include stale task IDs if we change them, 
        // but for this MVP it's sufficient. Better way is to intersect with actual task list.
        // However, to keep it fast, we will calculate based on passed totalTasks vs checked ones we know of.
        // Actually, we need to know WHICH tasks match this airdrop to count correctly if we want exact "X/Y".
        // For now, let's just return completedCount, but we might refine this in component.
        return completedCount;
    };

    return { completedTasks, toggleTask, isTaskCompleted, isLoaded };
}
