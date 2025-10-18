import { PropsQuiz } from '@/types/listQuiz';
import { useState } from 'react';

interface Props {
  question: PropsQuiz;
  index: number;
  onClick: (answer: number) => void;
}

export function Questions({ question, index, onClick }: Props) {
  const [answer, setAnswer] = useState<number | null>(null);

  function checkQuestion(index: number) {
    if (answer === null) {
      setAnswer(index);
      setTimeout(() => {
        setAnswer(null);
        onClick(index);
      }, 1000);
    }
  }

  return (
    <div className="">
      <div className="p-5 font-bold text-3xl">
        {index}. {question.question}
      </div>
      <div className="space-y-6 p-5">
        {question.options.map((item, index) => {
          return (
            <div
              onClick={() => checkQuestion(index)}
              key={index}
              className={`py-2 px-4 border-1 rounded-md text-indigo-950 mb-6 text-[1.15rem]
               ${
                 answer === null
                   ? 'hover:opacity-60 cursor-pointer'
                   : 'cursor-auto'
               }
                ${
                  answer !== null && question.answer === index
                    ? 'bg-green-300 border-green-700'
                    : answer === index
                    ? 'bg-red-300 border-red-700'
                    : 'bg-indigo-300 border-b-indigo-600'
                }
               `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
