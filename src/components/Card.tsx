import { listQuiz } from '@/data/questions';
import { Questions } from './Questions';
import { useState } from 'react';
import { Result } from './Result';
import { Button } from './Button';

export function Card() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const title = 'Quiz de Culinária';

  function loadNextQuestion() {
    if (listQuiz[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleAnswered(answer: number) {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  function handleRestartQuiz() {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-90 to-indigo-500 from-sky-500">
      <div
        className="flex flex-col justify-around bg-linear-90 to-indigo-100 from-sky-100 rounded-md shadow-black shadow-[1px_1px_10px]
        sm:w-full sm:max-w-xl sm:min-h-[660px] w-full max-w-[350px] min-h-[500px]"
      >
        <div className="font-bold border-b-2 border-indigo-500 p-5 text-1xl sm:text-3xl text-center">
          {title}
        </div>
        {!showResult && (
          <Questions
            onClick={handleAnswered}
            question={listQuiz[currentQuestion]}
            index={currentQuestion + 1}
          />
        )}
        {showResult && <Result answers={answers} />}
        <div className="p-5 text-center border-t-2 border-indigo-500 flex flex-col items-center gap-2">
          {showResult && (
            <Button onClick={handleRestartQuiz}>Reiniciar Quiz</Button>
          )}
          {!showResult && (
            <div>{`${currentQuestion + 1} de ${listQuiz.length} pergunta${
              listQuiz.length === 1 ? '' : 's'
            }`}</div>
          )}
        </div>
      </div>
    </div>
  );
}
