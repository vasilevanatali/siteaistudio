import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const IMAGES = [
  "https://picsum.photos/seed/slide1/800/400",
  "https://picsum.photos/seed/slide2/800/400",
  "https://picsum.photos/seed/slide3/800/400",
];

export default function SlidersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = IMAGES.length - 1;
      if (nextIndex >= IMAGES.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <SectionWrapper 
      title="Слайдеры и Карусели" 
      description="Интерактивные компоненты для отображения нескольких элементов в ограниченном пространстве."
    >
      <ComponentBlock title="Карусель галереи изображений" className="flex-col items-center">
        <div className="relative w-full max-w-3xl aspect-[2/1] bg-slate-100 rounded-2xl overflow-hidden shadow-lg group">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={IMAGES[currentIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full object-cover"
              referrerPolicy="no-referrer"
              alt={`Slide ${currentIndex + 1}`}
            />
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-slate-900 shadow-md"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-slate-900 shadow-md"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
