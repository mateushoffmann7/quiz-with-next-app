import { ReactNode } from 'react';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export function Button({ children, onClick }: Props) {
  return (
    <div>
      <button
        className="bg-linear-90 to-indigo-500 from-sky-500 py-2 px-2 rounded-md mb-2 text-indigo-100 font-semibold
              text-shadow-black text-shadow-[1px_1px_5px] hover:to-sky-300 hover:from-indigo-300 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
