import { useState } from 'react';
import { motion } from 'framer-motion';
import { courseData } from '../data/courseData';
import { X } from 'lucide-react';

interface PanicRangePickerProps {
    onSelectRange: (startWeek: number, endWeek: number) => void;
    onClose: () => void;
    currentActiveWeek: number;
}

export function PanicRangePicker({ onSelectRange, onClose, currentActiveWeek }: PanicRangePickerProps) {
    const [start, setStart] = useState<number | null>(null);
    const [end, setEnd] = useState<number | null>(null);

    const handleSelect = (weekNum: number) => {
        if (start === null || (start !== null && end !== null)) {
            setStart(weekNum);
            setEnd(null);
        } else {
            if (weekNum >= start) {
                setEnd(weekNum);
            } else {
                setEnd(start);
                setStart(weekNum);
            }
        }
    };

    const isSelected = (w: number) => {
        if (start !== null && end !== null) return w >= start && w <= end;
        if (start !== null) return w === start;
        return false;
    };

    const handleApply = () => {
        if (start !== null) {
            onSelectRange(start, end ?? start);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-panel w-full max-w-lg p-6 sm:p-8 relative bg-[#05050A]/80 border-white/20"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass-panel-interactive flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10"
                >
                    <X size={20} />
                </button>

                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    Panic Mode
                </h2>
                <p className="text-[var(--color-glass-text-muted)] mb-8 font-medium">Select the range of weeks you need to catch up on.</p>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 mb-10">
                    {courseData.map((week) => (
                        <button
                            key={week.week}
                            onClick={() => handleSelect(week.week)}
                            className={`
                                aspect-square rounded-xl font-bold text-lg transition-all duration-300 border
                                ${isSelected(week.week)
                                    ? 'bg-red-500/20 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] transform scale-105'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-105'
                                }
                                ${week.week === currentActiveWeek && !isSelected(week.week) ? 'ring-2 ring-[var(--color-glass-accent)] ring-offset-2 ring-offset-black' : ''}
                            `}
                        >
                            {week.week}
                        </button>
                    ))}
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 rounded-full font-bold text-gray-300 glass-panel-interactive hover:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleApply}
                        disabled={start === null}
                        className="px-6 py-3 rounded-full font-bold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed panic-button"
                    >
                        Generate Mega Card
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
