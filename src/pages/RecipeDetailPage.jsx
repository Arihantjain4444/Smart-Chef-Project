import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { NutritionChart } from '../components/recipe/NutritionChart';
import { ServingSelector } from '../components/recipe/ServingSelector';
import { useAppContext } from '../context/useAppContext';
import { MOCK_RECIPES } from '../data/mockRecipes';

export function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    selectedRecipe,
    setSelectedRecipe,
    servingMultiplier,
    setServingMultiplier,
    generateGroceryFromRecipe,
  } = useAppContext();

  const recipe = selectedRecipe || MOCK_RECIPES.find((r) => r.id === id);

  useEffect(() => {
    if (!recipe && id) {
      const found = MOCK_RECIPES.find((r) => r.id === id);
      if (found) setSelectedRecipe(found);
    }
  }, [id, recipe, setSelectedRecipe]);

  if (!recipe) {
    return (
      <div className="container py-4">
        <LoadingSpinner />
        <p className="text-center text-muted">Recipe not found.</p>
      </div>
    );
  }

  const multiplier = servingMultiplier;

  const scaledIngredients = (recipe.ingredients || []).map((ing) => ({
    ...ing,
    amount: parseFloat((ing.amount * multiplier).toFixed(1)),
  }));

  const startCooking = () => {
    setSelectedRecipe(recipe);
    navigate(`/recipe/${recipe.id}/cook`);
  };

  const addToGrocery = () => {
    generateGroceryFromRecipe(recipe);
    navigate('/grocery');
  };

  return (
    <div className="container py-4">
      <PageHeader
        title={recipe.title}
        subtitle={`${recipe.totalTime} min • ${recipe.servings} servings • ${recipe.difficulty}`}
        children={
          <div className="d-flex gap-2 flex-wrap">
            <ServingSelector
              servings={recipe.servings}
              multiplier={servingMultiplier}
              onChange={setServingMultiplier}
            />
            <button className="btn btn-outline-secondary btn-sm" onClick={addToGrocery}>
              🛒 Add to Grocery
            </button>
            <button className="btn btn-food-primary btn-sm" onClick={startCooking}>
              Start Cooking
            </button>
          </div>
        }
      />

      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="card-img-top object-fit-cover"
              style={{ maxHeight: '320px' }}
            />
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-header fw-semibold">Ingredients</div>
            <ul className="list-group list-group-flush">
              {scaledIngredients.map((ing, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between">
                  <span>{ing.name}</span>
                  <span className="text-muted">
                    {ing.amount} {ing.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card shadow-sm">
            <div className="card-header fw-semibold">Steps</div>
            <ol className="list-group list-group-flush list-group-numbered">
              {(recipe.steps || []).map((step) => (
                <li key={step.id} className="list-group-item">
                  {step.text}
                  {step.duration && (
                    <span className="badge bg-info ms-2">~{Math.round(step.duration / 60)} min</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: '1rem' }}>
            <div className="card-header fw-semibold">Nutrition (per serving)</div>
            <div className="card-body">
              <NutritionChart nutrition={recipe.nutrition} multiplier={1} />
            </div>
            <div className="card-footer small text-muted">
              Values are approximate. Scaling applies to total recipe.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
