import { useState } from "react";

import "../css/styles-name.css";

function Name() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="name-container text-center p-5 border rounded shadow bg-white">
        <h2 className="mt-3">
          {inputValue ? `Welcome, ${inputValue}!` : "Welcome!"}
        </h2>
        <label htmlFor="name-input" className="form-label mb-2">
          Enter your name:
        </label>
        <input
          id="name-input"
          type="text"
          className="form-control mb-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Your name"
        />
      </div>
    </div>
  );
}

export default Name;
