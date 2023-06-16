import React from "react";

type UniqueStringDisplayProps = {
  array: string[];
};

const UniqueStringDisplay: React.FC<UniqueStringDisplayProps> = ({ array }) => {
  const countMap: { [key: string]: number } = {};

  array.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;
  });

  const renderedArray = Object.keys(countMap).map((k) => {
    const count = countMap[k];
    const displayText = count > 1 ? `${k} x${count}` : k;
    return <p key={k}>{displayText}</p>;
  });

  return <div>{renderedArray}</div>;
};

export default UniqueStringDisplay;
