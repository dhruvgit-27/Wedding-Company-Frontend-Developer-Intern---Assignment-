import { useState, useEffect } from 'react';

export default function PawAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-4 md:left-8 bottom-16 md:bottom-20 z-10">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white rounded-2xl px-4 py-2 shadow-md">
          <p className="text-sm font-sans text-text-secondary font-medium">
            Best of Luck!
          </p>
        </div>

        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="transition-transform duration-500"
          style={{
            transform: isAnimating ? 'scale(1.08) rotate(3deg)' : 'scale(1) rotate(-2deg)',
          }}
        >
          <defs>
            <style>
              {`
                @keyframes pawPulse {
                  0% { transform: translateY(0px) scaleY(1); }
                  40% { transform: translateY(-2px) scaleY(0.95); }
                  70% { transform: translateY(-1px) scaleY(0.98); }
                  100% { transform: translateY(0px) scaleY(1); }
                }
                .paw-main {
                  ${isAnimating ? 'animation: pawPulse 0.8s ease-in-out;' : ''}
                }
              `}
            </style>
          </defs>

          <g className="paw-main">
            <circle cx="60" cy="75" r="22" fill="#FFB3B3" opacity="0.9" />

            <ellipse cx="35" cy="45" rx="12" ry="18" fill="#FFB3B3" opacity="0.85" />
            <ellipse cx="60" cy="32" rx="12" ry="18" fill="#FFB3B3" opacity="0.85" />
            <ellipse cx="85" cy="45" rx="12" ry="18" fill="#FFB3B3" opacity="0.85" />

            <circle cx="25" cy="58" r="11" fill="#F4C4C4" opacity="0.9" />
            <circle cx="60" cy="50" r="11" fill="#F4C4C4" opacity="0.9" />
            <circle cx="95" cy="58" r="11" fill="#F4C4C4" opacity="0.9" />
          </g>

          <g opacity="0.6">
            <path d="M 35 45 Q 32 48 30 52" stroke="#FFB3B3" strokeWidth="1.5" fill="none" />
            <path d="M 60 32 Q 58 36 56 41" stroke="#FFB3B3" strokeWidth="1.5" fill="none" />
            <path d="M 85 45 Q 88 48 90 52" stroke="#FFB3B3" strokeWidth="1.5" fill="none" />
          </g>
        </svg>
      </div>
    </div>
  );
}
