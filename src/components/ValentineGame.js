import React from 'react';

const ValentineGame = ({ onYesClick, onNoClick, noButtonPosition }) => {
  return (
    <div className="valentine-game">
      <h2 className="section-title">Will you be my Valentine forever, Shekha? 💖</h2>
      <div className="game-buttons">
        <button className="btn-yes" onClick={onYesClick}>Yes, my love! ❤️</button>
        <button 
          className="btn-no" 
          onClick={onNoClick}
          style={
            noButtonPosition ? {
              position: 'absolute',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`
            } : {}
          }
        >
          {noButtonPosition ? "Just kidding! ❤️" : "No"}
        </button>
      </div>
    </div>
  );
};

export default ValentineGame;