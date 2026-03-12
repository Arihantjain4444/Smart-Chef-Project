import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { RecipeCard } from '../components/recipe/RecipeCard';
import { RECIPE_CATEGORIES, MOCK_RECIPES, TIME_OPTIONS, MOODS, VEG_NONVEG } from '../data/mockRecipes';

function filterRecipes(recipes, { selectedTime, selectedMood, selectedVeg }) {
  let result = recipes;

  if (selectedTime != null) {
    result = result.filter((recipe) => recipe.totalTime <= selectedTime);
  }

  if (selectedMood != null && selectedMood !== '') {
    result = result.filter((recipe) => recipe.mood === selectedMood);
  }

  if (selectedVeg === 'veg') {
    result = result.filter((recipe) => recipe.isVeg === true);
  } else if (selectedVeg === 'nonveg') {
    result = result.filter((recipe) => recipe.isVeg === false);
  }

  return result;
}

export function HomePage() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedVeg, setSelectedVeg] = useState('all');

  const filteredRecipes = filterRecipes(MOCK_RECIPES, {
    selectedTime,
    selectedMood,
    selectedVeg,
  });

  const hasActiveFilters =
    selectedTime != null || (selectedMood != null && selectedMood !== '') || selectedVeg !== 'all';

  const resetFilters = () => {
    setSelectedTime(null);
    setSelectedMood(null);
    setSelectedVeg('all');
  };

  const sectionsWithRecipes = RECIPE_CATEGORIES.map((category) => ({
    ...category,
    recipes: filteredRecipes.filter((recipe) => recipe.categoryId === category.id),
  })).filter((section) => section.recipes.length > 0);

  return (
    <div className="container-fluid py-4 px-0 px-md-4">
      <div className="container">
        <PageHeader
          title="Discover Recipes"
          subtitle="Find the best food that fits your mood, time & diet."
        />
      </div>

      <div className="row g-0">
        <aside className="col-lg-3 mb-4 order-lg-2 ps-lg-4">
          <div className="card filter-card shadow-sm border-0 rounded-0 rounded-start-4">
            <div className="card-header bg-white border-bottom-0 pt-4 px-4">
              <h5 className="mb-0 fw-bold">Filter Recipes</h5>
            </div>
            <div className="card-body px-4 pb-4">
              {hasActiveFilters && (
                <button className="btn btn-food-primary btn-sm mb-3" onClick={resetFilters}>
                  Reset filters
                </button>
              )}
              <h6 className="filter-label">Time</h6>
              <p className="small text-muted mb-2">Show recipes within this time</p>
              <div className="d-flex flex-wrap gap-1 mb-3">
                {TIME_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`btn btn-sm filter-pill ${selectedTime === opt.id ? 'active' : ''}`}
                    onClick={() => setSelectedTime(selectedTime === opt.id ? null : opt.id)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <h6 className="filter-label">Mood</h6>
              <p className="small text-muted mb-2">What fits your mood today?</p>
              <div className="d-flex flex-wrap gap-1 mb-3">
                {MOODS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className={`btn btn-sm filter-pill ${selectedMood === m.id ? 'active' : ''}`}
                    onClick={() => setSelectedMood(selectedMood === m.id ? null : m.id)}
                  >
                    {m.icon} {m.label}
                  </button>
                ))}
              </div>

              <h6 className="filter-label">Veg / Non-Veg</h6>
              <p className="small text-muted mb-2">Diet preference</p>
              <div className="d-flex flex-wrap gap-1">
                {VEG_NONVEG.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    className={`btn btn-sm filter-pill ${selectedVeg === v.id ? 'active' : ''}`}
                    onClick={() => setSelectedVeg(v.id)}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="col-lg-9 order-lg-1 px-4">
          {hasActiveFilters && (
            <p className="results-count mb-3">
              {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} match your filters
            </p>
          )}

          {filteredRecipes.length === 0 ? (
            <div className="card no-results-card shadow-sm">
              <div className="card-body text-center py-5">
                <span className="no-results-icon">🍴</span>
                <h5 className="mt-2">No recipes match your filters</h5>
                <p className="text-muted mb-0">Try changing time, mood, or veg/non-veg and find your best match.</p>
                <button className="btn btn-food-primary mt-3" onClick={resetFilters}>
                  Reset filters
                </button>
              </div>
            </div>
          ) : (
            <div className="recipe-sections">
              {sectionsWithRecipes.map((section) => (
                <section key={section.id} className="recipe-category-section">
                  <h2 className="category-heading">
                    <span className="category-icon">{section.icon}</span>
                    {section.label}
                    {section.timeRange && (
                      <span className="category-time"> — {section.timeRange}</span>
                    )}
                  </h2>
                  <div className="row g-4">
                    {section.recipes.map((recipe) => (
                      <div key={recipe.id} className="col-12 col-md-6 col-lg-4">
                        <RecipeCard recipe={recipe} category={section} />
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
