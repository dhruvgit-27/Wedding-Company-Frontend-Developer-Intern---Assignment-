import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProgressBar from './ProgressBar';
import PawAnimation from './PawAnimation';
import AnswerOption from './AnswerOption';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface QuizContainerProps {
  questions: Question[];
  currentQuestion: number;
  answers: (number | null)[];
  onSelectAnswer: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

export default function QuizContainer({
  questions,
  currentQuestion,
  answers,
  onSelectAnswer,
  onNext,
  onPrevious,
  onSubmit,
}: QuizContainerProps) {
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center px-4 md:px-6 py-8 relative">
      <PawAnimation />

      <div className="w-full max-w-5xl bg-white rounded-container shadow-container px-6 md:px-containerPadding py-8 md:py-containerPaddingY">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="font-serif text-3xl md:text-title italic text-text-primary mb-2">
            Test Your Knowledge
          </h1>
          <p className="text-sm md:text-label text-text-secondary">
            Answer all questions to see your results
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <ProgressBar
            current={currentQuestion}
            total={questions.length}
          />
        </div>

        <div className="mb-8 md:mb-12">
          <div className="bg-accent-cyan rounded-card p-4 md:p-6 mb-gapMd">
            <h2 className="font-sans text-base md:text-heading text-text-primary text-center">
              {currentQuestion + 1}. {question.question}
            </h2>
          </div>

          <div className="space-y-gapMd">
            {question.options.map((option, index) => (
              <AnswerOption
                key={index}
                text={option}
                isSelected={selectedAnswer === index}
                onClick={() => onSelectAnswer(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            className="w-10 h-10 rounded-card bg-accent-lightBlue text-text-primary flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-80 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          {isLastQuestion ? (
            <button
              onClick={onSubmit}
              className="px-6 py-2 rounded-card bg-accent-lightBlue text-text-secondary font-sans text-label hover:bg-opacity-80 transition-all"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={onNext}
              className="w-10 h-10 rounded-card bg-accent-lightBlue text-text-primary flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
