import { useState, useEffect } from 'react';

export function useCompletion() {
    const [completedItems, setCompletedItems] = useState<string[]>(() => {
        const saved = localStorage.getItem('completed_items');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('completed_items', JSON.stringify(completedItems));
    }, [completedItems]);

    const toggleCompletion = (id: string) => {
        setCompletedItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const isCompleted = (id: string) => completedItems.includes(id);

    return { completedItems, toggleCompletion, isCompleted };
}
