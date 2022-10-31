import { FC } from "react";

interface SummaryProps {
  leftLabel: string,
  leftValue: string,
  rightLabel: string,
  rightValue: string,
};

const Summary: FC<SummaryProps> = ({ leftLabel, leftValue, rightLabel, rightValue }) => {
  return(
    <div className="flex w-full p-2 justify-between mb-4">
       <div className="flex w-full text-sm">
        <span> { leftLabel } </span>
        <span> { leftValue } </span>
      </div>
      <div className="flex w-full text-sm justify-end">
        <span> { rightLabel } </span>
        <span> {rightValue} </span>
      </div>
      </div>
  );
}

export default Summary;