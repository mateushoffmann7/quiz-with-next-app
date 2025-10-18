import { listQuiz } from '@/data/questions';
import { Questions } from './Questions';
import { useState } from 'react';

export function Card() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'Quiz de Culinária';

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-300">
      <div className="bg-indigo-100 rounded-md w-full max-w-xl">
        <div className="font-bold border-b border-indigo-500 p-5 text-2xl">
          {title}
        </div>
        <Questions
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
