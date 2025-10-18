import { PropsQuiz } from '@/types/listQuiz';

interface Props {
  question: PropsQuiz;
  index: number;
}

export function Questions({ question, index }: Props) {
  return (
    <div className="">
      <div className="p-5 font-bold text-3xl">
        {index}. {question.question}
      </div>
      <div className="space-y-6 p-5">
        {question.options.map((item, index) => {
          return (
            <div
              className="bg-indigo-500 p-2 rounded-md text-white mb-6 hover:bg-indigo-300 cursor-pointer"
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
