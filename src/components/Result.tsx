import { listQuiz } from '@/data/questions';

interface Props {
  answers: number[];
}

export function Result({ answers }: Props) {
  return (
    <div className="flex flex-col">
      {listQuiz.map((item, index) => {
        return (
          <div className="ml-4 space-y-2">
            <div key={item.id} className="font-bold">
              {`${' '}
                  ${index + 1}. 
                  ${item.question}`}
            </div>
            <span>
              {item.answer === answers[index]
                ? 'Acertou! '
                : 'Errou! A resposta correta é: '}
              {`${
                item.answer !== answers[index]
                  ? item.options[item.answer]
                  : 'Parabéns!'
              }`}
            </span>
          </div>
        );
      })}
    </div>
  );
}
