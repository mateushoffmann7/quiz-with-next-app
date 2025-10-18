import { PropsQuiz } from '@/types/listQuiz';

interface Props {
  question: PropsQuiz;
  index: number;
  onClick: () => void;
}

export function Questions({ question, index, onClick }: Props) {
  return (
    <div className="">
      <div className="p-5 font-bold text-3xl">
        {index}. {question.question}
      </div>
      <div className="space-y-6 p-5">
        {question.options.map((item, index) => {
          return (
            <div
              onClick={onClick}
              className="bg-indigo-300 py-2 px-4 border-1 border-indigo-600 rounded-md
               text-indigo-950 mb-6 hover:opacity-60 cursor-pointer text-[1.15rem]"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
