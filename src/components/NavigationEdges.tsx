import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationEdgesProps {
    onPrev: () => void;
    onNext: () => void;
    canPrev: boolean;
    canNext: boolean;
}

export function NavigationEdges({ onPrev, onNext, canPrev, canNext }: NavigationEdgesProps) {
    return (
        <>
            {/* Left Edge */}
            {canPrev && (
                <button
                    onClick={onPrev}
                    className="fixed left-0 top-1/2 -translate-y-1/2 h-2/3 w-16 sm:w-24 z-10 flex items-center justify-start group isolate hover:w-32 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    aria-label="Previous Week"
                >
                    {/* Peeking card effect */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute left-[-60%] w-full h-full bg-gradient-to-r from-black/80 to-black/10 backdrop-blur-md rounded-r-[3rem] opacity-30 group-hover:opacity-100 group-hover:left-[-10%] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 border-l-0 flex items-center justify-end pr-3"
                    >
                        <div className="text-white/50 group-hover:text-white transform group-hover:scale-110 transition-all duration-500 drop-shadow-md">
                            <ChevronLeft size={32} />
                        </div>
                    </motion.div>
                </button>
            )}

            {/* Right Edge */}
            {canNext && (
                <button
                    onClick={onNext}
                    className="fixed right-0 top-1/2 -translate-y-1/2 h-2/3 w-16 sm:w-24 z-10 flex items-center justify-end group isolate hover:w-32 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    aria-label="Next Week"
                >
                    {/* Peeking card effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute right-[-60%] w-full h-full bg-gradient-to-l from-black/80 to-black/10 backdrop-blur-md rounded-l-[3rem] opacity-30 group-hover:opacity-100 group-hover:right-[-10%] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 border-r-0 flex items-center justify-start pl-3"
                    >
                        <div className="text-white/50 group-hover:text-white transform group-hover:scale-110 transition-all duration-500 drop-shadow-md">
                            <ChevronRight size={32} />
                        </div>
                    </motion.div>
                </button>
            )}
        </>
    );
}
