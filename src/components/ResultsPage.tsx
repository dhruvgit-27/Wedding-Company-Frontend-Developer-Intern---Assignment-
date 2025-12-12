import { useEffect, useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface ResultsPageProps {
  percentage: number;
  onReset: () => void;
}

function RollingCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      setCount(Math.floor(target * easeProgress));

      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return count;
}

export default function ResultsPage({ percentage, onReset }: ResultsPageProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const displayPercentage = RollingCounter({ target: Math.round(percentage) });

  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center px-4 md:px-6 py-8">
      <div className="w-full max-w-5xl bg-white rounded-container shadow-container px-6 md:px-containerPadding py-8 md:py-containerPaddingY">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="font-serif text-3xl md:text-title italic text-text-primary mb-2">
            Test Your Knowledge
          </h1>
          <p className="text-sm md:text-label text-text-secondary">
            Answer all questions to see your results
          </p>
        </div>

        <div
          className="flex flex-col items-center justify-center gap-6 md:gap-8 py-8 md:py-12 transition-all duration-700"
          style={{
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'scale(1)' : 'scale(0.9)',
          }}
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-accent-cyan flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent-cyan to-accent-lightBlue opacity-20" />

            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-text-primary font-sans">
                {displayPercentage}
              </div>
              <div className="text-xs md:text-label text-text-secondary mt-1 md:mt-2">
                out of 100
              </div>
            </div>
          </div>

          <div className="text-center max-w-md">
            <h2 className="text-lg md:text-2xl font-serif italic text-text-primary mb-2 md:mb-3">
              Great effort!
            </h2>
            <p className="text-xs md:text-label text-text-secondary">
              You've completed the quiz. Click below to try again.
            </p>
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-card bg-accent-lightBlue text-text-primary font-sans text-sm md:text-body hover:bg-opacity-80 transition-all mt-2 md:mt-4"
          >
            <RotateCcw size={18} />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
