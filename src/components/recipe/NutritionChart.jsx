import React from 'react';

export function NutritionChart({ nutrition, multiplier = 1 }) {
  if (!nutrition) return null;

  const scaled = {
    protein: Math.round(nutrition.protein * multiplier),
    carbs: Math.round(nutrition.carbs * multiplier),
    fat: Math.round(nutrition.fat * multiplier),
  };

  const totalMacros = scaled.protein + scaled.carbs + scaled.fat || 1;

  const proteinPercent = (scaled.protein / totalMacros) * 100;
  const carbsPercent = (scaled.carbs / totalMacros) * 100;

  const totalCal = Math.round((nutrition.calories || 0) * multiplier);
  const totalSodium = Math.round((nutrition.sodium || 0) * multiplier);

  const donutStyle = {
    background: `conic-gradient(
      #0d6efd 0 ${proteinPercent}%,
      #198754 ${proteinPercent}% ${proteinPercent + carbsPercent}%,
      #fd7e14 ${proteinPercent + carbsPercent}% 100%
    )`,
  };

  return (
    <div className="nutrition-chart">
      <div className="nutrition-donut" style={donutStyle}>
        <div className="nutrition-donut-inner">
          <div className="small text-center">
            <div className="fw-bold">{totalCal}</div>
            <div className="text-body-secondary">cal</div>
          </div>
        </div>
      </div>

      <ul className="list-unstyled small mt-3 mb-2 nutrition-legend">
        <li className="d-flex justify-content-between align-items-center mb-1">
          <span>
            <span className="nutrition-dot bg-protein me-2" />
            Protein
          </span>
          <span className="fw-semibold">{scaled.protein} g</span>
        </li>
        <li className="d-flex justify-content-between align-items-center mb-1">
          <span>
            <span className="nutrition-dot bg-carbs me-2" />
            Carbs
          </span>
          <span className="fw-semibold">{scaled.carbs} g</span>
        </li>
        <li className="d-flex justify-content-between align-items-center">
          <span>
            <span className="nutrition-dot bg-fat me-2" />
            Fat
          </span>
          <span className="fw-semibold">{scaled.fat} g</span>
        </li>
      </ul>

      <div className="mt-1 small text-center text-body-secondary">
        <strong>{totalSodium}</strong> mg sodium
      </div>
    </div>
  );
}
