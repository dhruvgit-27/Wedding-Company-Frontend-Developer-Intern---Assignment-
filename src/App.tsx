import { useState } from 'react';
import QuizContainer from './components/QuizContainer';
import ResultsPage from './components/ResultsPage';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null, null]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What sound does a cat make?',
      options: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink'],
      correct: 1,
    },
    {
      id: 2,
      question: 'What would you probably find in your fridge?',
      options: ['Shoes', 'Ice Cream', 'Books'],
      correct: 1,
    },
    {
      id: 3,
      question: 'What color are bananas?',
      options: ['Blue', 'Yellow', 'Red'],
      correct: 1,
    },
    {
      id: 4,
      question: 'How many stars are in the sky?',
      options: ['Two', 'Infinite', 'One Hundred'],
      correct: 1,
    },
  ];

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === questions[index].correct ? score + 1 : score;
    }, 0);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([null, null, null, null]);
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    return <ResultsPage percentage={percentage} onReset={handleReset} />;
  }

  return (
    <QuizContainer
      questions={questions}
      currentQuestion={currentQuestion}
      answers={answers}
      onSelectAnswer={handleSelectAnswer}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
    />
  );
}

export default App;
