interface AnswerOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function AnswerOption({
  text,
  isSelected,
  onClick,
}: AnswerOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 md:px-6 py-3 md:py-5 rounded-card font-sans text-sm md:text-body text-center transition-all duration-200 ${
        isSelected
          ? 'bg-accent-cyan text-text-primary'
          : 'bg-white text-text-secondary border-2 border-transparent hover:border-accent-cyan'
      }`}
    >
      {text}
    </button>
  );
}
