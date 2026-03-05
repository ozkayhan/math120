import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, FileText, CheckCircle2, ExternalLink, Check } from 'lucide-react';
import { WeekContent } from '../data/courseData';
import { useCompletion } from '../hooks/useCompletion';

interface WeekCardProps {
    data: WeekContent;
}

export function WeekCard({ data }: WeekCardProps) {
    const { toggleCompletion, isCompleted } = useCompletion();
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <div className="w-full h-full max-w-6xl mx-auto flex flex-col gap-6 p-4 sm:p-6 overflow-y-auto">
            {/* Header / Week Identifier */}
            <div className="glass-panel p-6 sm:p-8 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10 transition-all duration-300">
                <div className="flex flex-col gap-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#818cf8] tracking-tight drop-shadow-sm"
                    >
                        {data.week === -1 ? "Mega Panic Card" : `Week ${data.week}`}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-[var(--color-glass-text-muted)] font-medium tracking-wide uppercase text-xs tracking-widest mt-2"
                    >
                        Starts {data.startDate}
                    </motion.p>
                </div>
                {/* Visual Flair */}
                <div className="hidden sm:flex relative items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#818cf8]/20 to-transparent blur-md"></div>
                    <div className="w-2 h-2 rounded-full bg-[#818cf8] shadow-[0_0_10px_#818cf8]"></div>
                </div>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
                {/* Left Column (Syllabus & notes) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Syllabus Topics */}
                    <section className="glass-panel p-6 sm:p-8 flex flex-col flex-1 relative group hover:border-[var(--color-glass-border-hover)] transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#818cf8]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#818cf8]/20 transition-all duration-700"></div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
                            <span className="p-2 rounded-lg bg-[#818cf8]/10 border border-[#818cf8]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                                <CheckCircle2 size={20} className="text-[#818cf8]" />
                            </span>
                            Syllabus
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            {data.topics.map((topic, i) => (
                                <motion.li
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md shadow-sm hover:bg-black/20 hover:border-white/10 transition-all duration-300"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#818cf8] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#818cf8]" />
                                    <span className="text-gray-200 font-medium leading-relaxed text-sm sm:text-base">{topic}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </section>

                    {/* Paul's Notes */}
                    <section className="glass-panel p-6 sm:p-8 group hover:border-[var(--color-glass-border-hover)] transition-colors duration-500">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
                            <span className="p-2 rounded-lg bg-[#818cf8]/10 border border-[#818cf8]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                                <FileText size={20} className="text-[#818cf8]" />
                            </span>
                            Paul's Notes
                        </h3>
                        <div className="flex flex-col gap-3">
                            {data.paulNotes.map((note, i) => {
                                const completed = isCompleted(note.url);
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 + 0.2 }}
                                        key={i}
                                        className={`group/note relative flex items-center gap-2`}
                                    >
                                        <a
                                            href={note.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`glass-panel-interactive flex-grow px-5 py-4 flex items-center gap-4 text-gray-300 hover:text-white font-semibold group/btn ${completed ? 'glass-panel-completed' : ''}`}
                                        >
                                            <div className={`p-2.5 rounded-xl border border-white/5 bg-black/40 group-hover/btn:bg-[#818cf8]/20 group-hover/btn:border-[#818cf8]/40 transition-all duration-300 shadow-inner ${completed ? 'bg-green-500/20 border-green-500/30' : ''}`}>
                                                <FileText size={16} className={completed ? 'text-green-400' : 'text-[#818cf8]'} />
                                            </div>
                                            <span className="truncate text-sm sm:text-base tracking-tight">{note.title}</span>
                                            <ExternalLink size={14} className="ml-auto opacity-0 group-hover/btn:opacity-50 transition-opacity" />
                                        </a>

                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleCompletion(note.url);
                                            }}
                                            className={`flex-shrink-0 p-3 rounded-xl border border-white/5 transition-all duration-300 ${completed ? 'bg-green-500/20 border-green-500/40 text-green-400' : 'bg-black/40 text-gray-500 hover:text-white hover:border-white/20'}`}
                                            title={completed ? "Mark as uncompleted" : "Mark as completed"}
                                        >
                                            {completed ? <CheckCircle2 size={20} className="check-mark-active" /> : <Check size={20} />}
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Right Column (Videos) */}
                <div className="lg:col-span-8 glass-panel p-6 sm:p-8 relative group hover:border-[var(--color-glass-border-hover)] transition-colors duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#818cf8]/5 rounded-full blur-[100px] -z-10 group-hover:bg-[#818cf8]/10 transition-all duration-1000"></div>

                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
                        <span className="p-2 rounded-lg bg-[#818cf8]/10 border border-[#818cf8]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                            <PlayCircle size={20} className="text-[#818cf8]" />
                        </span>
                        Lecture Videos
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 auto-rows-max relative z-10">
                        {data.youtube.map((video, i) => {
                            const videoIdMatch = video.url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
                            const videoId = videoIdMatch ? videoIdMatch[1] : null;
                            const completed = isCompleted(video.url);
                            const isPlaying = activeVideo === video.url;

                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 + 0.3, type: "spring", stiffness: 300, damping: 25 }}
                                    key={i}
                                    className={`relative glass-panel-interactive overflow-hidden flex flex-col group/video h-full rounded-2xl bg-black/20 ${completed ? 'glass-panel-completed' : ''}`}
                                >
                                    <div className="relative w-full aspect-video bg-black/80 overflow-hidden border-b border-white/5">
                                        <AnimatePresence mode="wait">
                                            {isPlaying && videoId ? (
                                                <motion.iframe
                                                    key="player"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                                    title={video.title}
                                                    className="absolute inset-0 w-full h-full border-0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <motion.div
                                                    key="thumbnail"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute inset-0"
                                                    onClick={() => setActiveVideo(video.url)}
                                                >
                                                    {videoId ? (
                                                        <img
                                                            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                                                            alt={video.title}
                                                            className="w-full h-full object-cover origin-center transform group-hover/video:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-70 group-hover/video:opacity-100 mix-blend-luminosity group-hover/video:mix-blend-normal"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-gray-700">
                                                            <PlayCircle size={48} strokeWidth={1} />
                                                        </div>
                                                    )}

                                                    {/* Video Play Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/video:opacity-40 transition-opacity duration-500"></div>

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 rounded-full flex items-center justify-center scale-90 group-hover/video:scale-110 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer">
                                                            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full border border-white/30 group-hover/video:border-[#818cf8]/80 group-hover/video:bg-[#818cf8]/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500"></div>
                                                            <PlayCircle className="text-white ml-1.5 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" size={28} fill="currentColor" />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Completion Toggle Overlay */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleCompletion(video.url);
                                            }}
                                            className={`absolute top-3 right-3 z-20 p-2 rounded-lg backdrop-blur-md border transition-all duration-300 ${completed ? 'bg-green-500/40 border-green-500/50 text-white' : 'bg-black/40 border-white/10 text-white/50 hover:text-white hover:bg-black/60'}`}
                                        >
                                            {completed ? <CheckCircle2 size={18} className="check-mark-active" /> : <Check size={18} />}
                                        </button>
                                    </div>

                                    <div className="p-4 sm:p-5 flex-grow flex flex-col gap-2 bg-gradient-to-b from-transparent to-black/40">
                                        <h4 className="font-semibold text-gray-200 line-clamp-2 leading-snug group-hover/video:text-white transition-colors duration-300 text-sm sm:text-base">
                                            {video.title}
                                        </h4>
                                        <div className="flex items-center justify-between mt-auto pt-2">
                                            <a
                                                href={video.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-[#818cf8] transition-colors flex items-center gap-1"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                YouTube <ExternalLink size={10} />
                                            </a>
                                            {completed && (
                                                <span className="text-[10px] uppercase tracking-widest font-bold text-green-500 flex items-center gap-1">
                                                    Completed <Check size={10} strokeWidth={3} />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
