import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { useAppContext } from '../context/useAppContext';
import { MOCK_RECIPES } from '../data/mockRecipes';

export function GroceryListPage() {
  const {
    groceryList,
    addToGroceryList,
    toggleGroceryItem,
    removeFromGroceryList,
    clearGroceryList,
  } = useAppContext();

  const [selectedRecipeId, setSelectedRecipeId] = useState('');
  const [newItem, setNewItem] = useState('');

  const addRecipeToGrocery = () => {
    const recipe = MOCK_RECIPES.find((r) => r.id === selectedRecipeId);
    if (recipe) {
      addToGroceryList(
        recipe.ingredients.map((i) => ({ name: i.name, quantity: `${i.amount} ${i.unit}`.trim() }))
      );
      setSelectedRecipeId('');
    }
  };

  const addCustomItem = () => {
    const trimmed = newItem.trim();
    if (trimmed) {
      addToGroceryList([{ name: trimmed, quantity: '1' }]);
      setNewItem('');
    }
  };

  const uncheckedItems = groceryList.filter((i) => !i.checked);
  const checkedItems = groceryList.filter((i) => i.checked);

  return (
    <div className="container py-4">
      <PageHeader
        title="Grocery List"
        subtitle="Generate from recipes or add items manually."
        children={
          groceryList.length > 0 && (
            <button className="btn btn-outline-danger btn-sm" onClick={clearGroceryList}>
              Clear All
            </button>
          )
        }
      />

      <div className="row">
        <aside className="col-lg-4 mb-4">
          <div className="card filter-card shadow-sm">
            <div className="card-header fw-semibold">Add Items</div>
            <div className="card-body">
              <h6 className="text-uppercase text-muted small mb-2">From Recipe</h6>
              <div className="d-flex gap-2 mb-3">
                <select
                  className="form-select form-select-sm"
                  value={selectedRecipeId}
                  onChange={(e) => setSelectedRecipeId(e.target.value)}
                >
                  <option value="">Select recipe...</option>
                  {MOCK_RECIPES.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title}
                    </option>
                  ))}
                </select>
                <button className="btn btn-food-primary btn-sm" onClick={addRecipeToGrocery} disabled={!selectedRecipeId}>
                  Add
                </button>
              </div>

              <h6 className="text-uppercase text-muted small mb-2">Manual Entry</h6>
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Milk, Eggs..."
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCustomItem()}
                />
                <button className="btn btn-food-add" type="button" onClick={addCustomItem}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="col-lg-8">
          {groceryList.length === 0 ? (
            <div className="card shadow-sm">
              <div className="card-body text-center text-body-secondary py-5">
                <p className="mb-0">Your grocery list is empty.</p>
                <p className="small mt-2">Add ingredients from recipes or type items manually.</p>
              </div>
            </div>
          ) : (
            <div className="card shadow-sm">
              <div className="card-body">
                {uncheckedItems.length > 0 && (
                  <ul className="list-group list-group-flush mb-0">
                    {uncheckedItems.map((item, idx) => (
                      <li
                        key={`${item.name}-${idx}`}
                        className="list-group-item d-flex align-items-center justify-content-between"
                      >
                        <label className="form-check mb-0 flex-grow-1">
                          <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked={false}
                            onChange={() => toggleGroceryItem(item.name)}
                          />
                          <span className="fw-medium">{item.name}</span>
                          {item.quantity && <span className="text-muted ms-2 small">{item.quantity}</span>}
                        </label>
                        <button
                          className="btn btn-link text-danger btn-sm p-0 ms-2"
                          onClick={() => removeFromGroceryList(item.name)}
                          aria-label={`Remove ${item.name}`}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {checkedItems.length > 0 && (
                  <div className="mt-3 pt-3 border-top">
                    <span className="small text-muted text-uppercase">Completed</span>
                    <ul className="list-group list-group-flush mt-1">
                      {checkedItems.map((item, idx) => (
                        <li
                          key={`done-${item.name}-${idx}`}
                          className="list-group-item d-flex align-items-center text-decoration-line-through text-muted"
                        >
                          <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked
                            onChange={() => toggleGroceryItem(item.name)}
                          />
                          <span>{item.name}</span>
                          {item.quantity && <span className="ms-2 small">{item.quantity}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
