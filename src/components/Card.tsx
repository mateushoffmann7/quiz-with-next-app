import { listQuiz } from '@/data/questions';
import { Questions } from './Questions';
import { useState } from 'react';

export function Card() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'Quiz de Culinária';

  console.log(listQuiz[currentQuestion]);

  function loadNextQuestion() {
    if (listQuiz[currentQuestion + 1]) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-400">
      <div className="bg-indigo-100 rounded-md w-full max-w-xl">
        <div className="font-bold border-b border-indigo-500 p-5 text-2xl">
          {title}
        </div>
        <Questions
          onClick={() => loadNextQuestion()}
          question={listQuiz[currentQuestion]}
          index={currentQuestion + 1}
        />
        <div className="p-5 text-center border-t border-indigo-500">
          {currentQuestion + 1} de {listQuiz.length} perguntas
        </div>
      </div>
    </div>
  );
}
