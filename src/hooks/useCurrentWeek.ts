import { useMemo } from 'react';
import { differenceInCalendarWeeks, parseISO, startOfDay, isBefore } from 'date-fns';

const SEMESTER_START_DATE = "2026-02-16";
const MAX_WEEKS = 14;

export function useCurrentWeek() {
    const currentWeek = useMemo(() => {
        const today = startOfDay(new Date());
        const startDate = parseISO(SEMESTER_START_DATE);

        if (isBefore(today, startDate)) {
            return 1; // Semester hasn't started yet, default to Week 1
        }

        // differenceInCalendarWeeks uses Sunday as start of week by default, 
        // but we can specify Monday. Semester starts Feb 16 (which is a Monday).
        // Let's just use difference in days / 7 to be exact with Monday start.
        const diffTime = today.getTime() - startDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const weeksDiff = Math.floor(diffDays / 7);

        // Week 1 starts at 0 weeks difference
        const calculatedWeek = weeksDiff + 1;

        // Clamp between 1 and MAX_WEEKS
        return Math.max(1, Math.min(calculatedWeek, MAX_WEEKS));
    }, []);

    return currentWeek;
}
