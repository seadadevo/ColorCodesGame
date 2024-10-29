import React, { useState, useEffect } from "react";

// Generate a random HEX color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const ColorCodes = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const correctColor = targetColor;
    const incorrectColor1 = getRandomColor();
    const incorrectColor2 = getRandomColor();

    const newOptions = [correctColor, incorrectColor1, incorrectColor2].sort(
      () => Math.random() - 0.5
    );

    setOptions(newOptions);
  }, [targetColor]);

  function handleColorClick(color) {
    if (color === targetColor) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect!");
    }
  }

  function handlePlayAgain() {
    setMessage("");
    setTargetColor(getRandomColor());
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Color Codes</h1>
      <h2>{targetColor}</h2>
      <h2>What color is this?</h2>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {options.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
              width: "100px",
              height: "100px",
              cursor: "pointer",
            }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>

      {message && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>{message}</h2>
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default ColorCodes;
