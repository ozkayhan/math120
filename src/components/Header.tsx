import { BookOpen, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
    onPanicToggle: () => void;
    isPanicMode: boolean;
}

export function Header({ onPanicToggle, isPanicMode }: HeaderProps) {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full py-6 px-4 sm:px-8 relative z-50 sticky top-0"
        >
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md border-b border-white/5 -z-10 gradient-mask-b-0"></div>

            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo Section */}
                <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-12 h-12 rounded-2xl glass-panel-interactive border border-white/10 flex items-center justify-center text-[#818cf8] shadow-[0_4px_24px_rgba(129,140,248,0.2)] group-hover:shadow-[0_4px_32px_rgba(129,140,248,0.4)] group-hover:-rotate-3 transition-all duration-500">
                        <BookOpen size={22} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-md">
                            METU<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#60a5fa] ml-2">MATH 120</span>
                        </h1>
                        <p className="text-xs sm:text-sm font-semibold text-[#a1a1aa] tracking-widest uppercase mt-0.5">
                            Course Hub
                        </p>
                    </div>
                </div>

                {/* Panic Toggle */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onPanicToggle}
                    className={`flex items-center gap-2.5 px-6 py-3 font-extrabold tracking-wide uppercase text-sm ${isPanicMode
                            ? 'panic-button-active'
                            : 'panic-button'
                        }`}
                >
                    <AlertCircle size={18} strokeWidth={2.5} className={isPanicMode ? "animate-pulse" : ""} />
                    <span className="hidden sm:inline">
                        {isPanicMode ? 'Exit Panic' : 'Panic Mode'}
                    </span>
                </motion.button>
            </div>
        </motion.header>
    );
}
