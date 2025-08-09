// Components/Highlightinp.jsx
import React, { useState } from 'react';

const Highlightinp = ({ pattern }) => {
  const [inputText, setInputText] = useState('');

  const highlightText = (text) => {
    if (!pattern || !text) return text;

    return text.split(pattern).map((part, i) => {
      if (pattern.test(part)) {
        return (
          <span key={i} style={{ color: 'red', fontWeight: 'bold' }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <input
        className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
        id="inp"
      />
      <div className="mt-4 text-2xl font-bold text-gray-800 ">
        {highlightText(inputText)}
      </div>
    </div>
  );
};

export default Highlightinp;
