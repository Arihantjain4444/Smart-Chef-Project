import React from 'react';
import { Link } from 'react-router-dom';

export function RecipeCard({ recipe, category }) {
  const icon = category?.icon || '🍽️';

  return (
    <Link to={`/recipe/${recipe.id}`} className="text-decoration-none text-reset">
      <div className="card h-100 overflow-hidden recipe-card">
        <div className="ratio ratio-1x1 bg-secondary recipe-card-img-wrap">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="object-fit-cover"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&w=600';
            }}
          />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
            <h5 className="card-title mb-0 fw-semibold text-truncate recipe-card-title">{recipe.title}</h5>
            <span className="badge badge-category text-nowrap">{icon}</span>
          </div>
          <div className="d-flex flex-wrap gap-2 recipe-card-meta">
            <span>⏱️ {recipe.totalTime} min</span>
            <span>👥 {recipe.servings} servings</span>
            <span>📊 {recipe.difficulty}</span>
          </div>
          {recipe.tags?.length > 0 && (
            <div className="mt-2">
              {recipe.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="badge badge-tag me-1 mb-1">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
