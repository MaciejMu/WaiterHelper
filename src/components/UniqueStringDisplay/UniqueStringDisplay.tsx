import React from "react";

type UniqueStringDisplayProps = {
  array: string[];
};

const UniqueStringDisplay: React.FC<UniqueStringDisplayProps> = ({ array }) => {
  const countMap: { [key: string]: number } = {};

  array.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;
  });

  const renderedArray = Object.keys(countMap).map((key) => {
    const count = countMap[key];
    const displayText = count > 1 ? `${key} x${count}` : key;
    return <p key={key}>{displayText}</p>;
  });

  return <div>{renderedArray}</div>;
};

export default UniqueStringDisplay;
