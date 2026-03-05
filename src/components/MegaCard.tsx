import { useMemo } from 'react';
import { WeekCard } from './WeekCard';
import { WeekContent } from '../data/courseData';

interface MegaCardProps {
    weeks: WeekContent[];
}

export function MegaCard({ weeks }: MegaCardProps) {
    // Aggregate all weeks into a single "Mega Week"
    const megaData: WeekContent = useMemo(() => {

        // Sort weeks by number just to be safe
        const sortedWeeks = [...weeks].sort((a, b) => a.week - b.week);

        // De-duplication helper for arrays of objects with URLs
        const dedupeUrls = <T extends { url: string }>(items: T[]): T[] => {
            const seen = new Set<string>();
            return items.filter(item => {
                if (seen.has(item.url)) return false;
                seen.add(item.url);
                return true;
            });
        };

        return {
            week: -1, // Special identifier for Mega Card
            startDate: `${sortedWeeks[0]?.startDate || ''} to ${sortedWeeks[sortedWeeks.length - 1]?.startDate || ''}`,
            topics: Array.from(new Set(sortedWeeks.flatMap(w => w.topics))), // remove duplicates
            youtube: dedupeUrls(sortedWeeks.flatMap(w => w.youtube)),
            paulNotes: dedupeUrls(sortedWeeks.flatMap(w => w.paulNotes)),
        };
    }, [weeks]);

    return (
        <div className="w-full h-full relative">
            <WeekCard data={megaData} />

            {/* Overlay a custom title physically above the WeekCard Header since it renders "Mega Panic Card" */}
            <div className="absolute top-6 left-6 right-6 sm:top-10 sm:left-10 sm:right-10 z-10 pointers-none">
                <div className="glass-panel p-6 w-full flex flex-col justify-center items-start shadow-[0_0_20px_rgba(239,68,68,0.4)] border-red-500/50">
                    <h2 className="text-3xl font-extrabold text-red-500 tracking-tight flex items-center gap-3 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                        Panic Mega Card!
                    </h2>
                    <p className="text-gray-300 font-medium mt-1">
                        Weeks {weeks[0]?.week} to {weeks[weeks.length - 1]?.week} ({megaData.startDate})
                    </p>
                </div>
            </div>
        </div>
    );
}
