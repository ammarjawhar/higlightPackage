import React, { useState } from 'react';

const Highlightinp = ({ pattern }) => {
  const [inputText, setInputText] = useState('');

  const highlightText = (text) => {
    if (!pattern || !text) return text;

    return text.replace(pattern, (match) => {
      return `<span style="color:red">${match}</span>`;
    });
  };

  return (
    <div className="relative w-1/2 mx-auto ">
      <div
        className="absolute top-0 left-0 w-full p-2  pointer-events-none"
        dangerouslySetInnerHTML={{ __html: highlightText(inputText) }}
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
        }}
      />
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md relative z-10"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{
          background: 'transparent',
          color: 'transparent',
          caretColor: 'red',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
        }}
      />
    </div>
  );
};
export default Highlightinp;
