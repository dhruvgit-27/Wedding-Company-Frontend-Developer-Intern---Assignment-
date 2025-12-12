interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{
            width: '90px',
            backgroundColor: index <= current ? '#1B4965' : '#E5E5E5',
          }}
        />
      ))}
    </div>
  );
}
