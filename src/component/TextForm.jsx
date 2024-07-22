import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");
  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleLowerClick = () => {
              let newText = text.toLowerCase();
              setText(newText);
            };

            const handleAllClearClick = () => {
              let newText = "";
              setText(newText);
            };
  return (
    <>
      <div className="h-2/4 w-6/12 border mx-auto">
        <div className="textarea mb-3">
          <label htmlFor="MyBox" className="form-label">
            Text
          </label>
          <textarea
            type="text"
            className="form-control border"
            value={text}
            onChange={handleOnchange}
            id="MyBox"
            rows="10"
            cols={100}
            placeholder="Enter Text Here"
          ></textarea>
        </div>
        <div className="btnArea flex gap-5 m-3">
          <button className="toUpperCase border bg-orange-300 p-2 rounded-xl hover:bg-blue-500" onClick={handleUpperClick}>Convert To UpperCase</button>
          <button className="toLowerCase border bg-lime-400 p-2 rounded-xl hover:bg-blue-500" onClick={handleLowerClick}>Convert To LowerCase</button>
          <button className="allClear border bg-red-300 p-2 rounded-xl hover:bg-blue-500" onClick={handleAllClearClick}>All Clear</button>
        </div>
      </div>
    </>
  );
};

export default TextForm;
