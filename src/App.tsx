import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WeekCard } from './components/WeekCard';
import { NavigationEdges } from './components/NavigationEdges';
import { PanicRangePicker } from './components/PanicRangePicker';
import { MegaCard } from './components/MegaCard';
import { courseData, WeekContent } from './data/courseData';
import { useCurrentWeek } from './hooks/useCurrentWeek';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      filter: 'blur(8px)',
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      filter: 'blur(8px)',
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function App() {
  const currentWeek = useCurrentWeek();
  const [[page, direction], setPage] = useState([currentWeek - 1, 0]);

  // Panic Mode State
  const [isPanicMode, setIsPanicMode] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [panicRange, setPanicRange] = useState<[number, number] | null>(null);

  // Derive active data
  const maxPages = courseData.length - 1;
  const activeIndex = Math.max(0, Math.min(page, maxPages));
  const activeWeekData = courseData[activeIndex] || courseData[0];

  const paginate = (newDirection: number) => {
    const nextPage = page + newDirection;
    if (nextPage >= 0 && nextPage <= maxPages) {
      setPage([nextPage, newDirection]);
    }
  };

  const handlePanicToggle = () => {
    if (isPanicMode) {
      setIsPanicMode(false);
      setPanicRange(null);
    } else {
      setShowPicker(true);
    }
  };

  const handleApplyPanic = (start: number, end: number) => {
    setPanicRange([start, end]);
    setIsPanicMode(true);
    setShowPicker(false);
  };

  let activeView;
  if (isPanicMode && panicRange) {
    const [start, end] = panicRange;
    const weeksToCombine = courseData.filter(w => w.week >= start && w.week <= end);
    activeView = (
      <motion.div
        key="mega-card"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-6xl mx-auto h-full px-4 sm:px-0"
      >
        <MegaCard weeks={weeksToCombine} />
      </motion.div>
    );
  } else {
    activeView = (
      <div className="relative w-full flex-grow flex items-center justify-center px-4 sm:px-12 md:px-24">
        <NavigationEdges
          onPrev={() => paginate(-1)}
          onNext={() => paginate(1)}
          canPrev={page > 0}
          canNext={page < maxPages}
        />
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            drag={isPanicMode ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold && page < maxPages) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold && page > 0) {
                paginate(-1);
              }
            }}
            className="w-full max-w-6xl min-h-[60vh] cursor-grab active:cursor-grabbing mx-auto my-6"
          >
            <WeekCard data={activeWeekData} />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-[var(--color-glass-accent)] selection:text-white pb-6 overflow-hidden">
      <Header onPanicToggle={handlePanicToggle} isPanicMode={isPanicMode} />

      <main className="flex-grow w-full flex flex-col justify-center items-center relative overflow-visible">
        {activeView}
      </main>

      <Footer />

      <AnimatePresence>
        {showPicker && (
          <PanicRangePicker
            currentActiveWeek={currentWeek}
            onSelectRange={handleApplyPanic}
            onClose={() => setShowPicker(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
