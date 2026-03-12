import React from 'react';

export function ServingSelector({ servings, multiplier, onChange }) {
  const multiplierValue = multiplier ?? 1;

  const adjust = (delta) => {
    const newMult = Math.max(0.25, Math.min(4, multiplierValue + delta));
    onChange?.(newMult);
  };

  const displayServings = Math.round(servings * multiplierValue);

  return (
    <div className="d-flex align-items-center gap-2">
      <span className="fw-medium">Servings:</span>
      <div className="btn-group btn-group-sm">
        <button className="btn btn-outline-secondary" onClick={() => adjust(-0.5)} aria-label="Decrease servings">
          −
        </button>
        <span className="btn btn-outline-secondary disabled" style={{ minWidth: '4rem' }}>
          {displayServings}
        </span>
        <button className="btn btn-outline-secondary" onClick={() => adjust(0.5)} aria-label="Increase servings">
          +
        </button>
      </div>
    </div>
  );
}
