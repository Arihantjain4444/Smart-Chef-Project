import React, { useEffect, useState } from 'react';
import { AppContext } from './useAppContext';

export function AppProvider({ children }) {
  // Theme
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const storedDarkMode = localStorage.getItem('smartchef-dark-mode');
      if (storedDarkMode !== null) {
        return storedDarkMode === 'true';
      }
    } catch {
      return false;
    }
    return false;
  });

  // Selected recipe and cooking state
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [servingMultiplier, setServingMultiplier] = useState(1);
  const [cookingStepIndex, setCookingStepIndex] = useState(0);

  // Grocery list
  const [groceryList, setGroceryList] = useState(() => {
    try {
      const storedGroceryList = localStorage.getItem('smartchef-grocery-list');
      if (storedGroceryList) {
        const parsed = JSON.parse(storedGroceryList);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch {
      return [];
    }
    return [];
  });

  // Keep document theme and localStorage in sync with darkMode
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    try {
      localStorage.setItem('smartchef-dark-mode', String(darkMode));
    } catch {
      return;
    }
  }, [darkMode]);

  // Persist grocery list whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('smartchef-grocery-list', JSON.stringify(groceryList));
    } catch {
      return;
    }
  }, [groceryList]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  const updateServingMultiplier = (multiplier) => {
    const clamped = Math.max(0.25, Math.min(4, multiplier));
    setServingMultiplier(clamped);
  };

  const addToGroceryList = (items) => {
    setGroceryList((current) => {
      const existingNames = current.map((item) => item.name.toLowerCase());

      const newItems = items
        .filter((item) => !existingNames.includes((item.name || item).toLowerCase()))
        .map((item) => {
          if (typeof item === 'string') {
            return { name: item, quantity: '1', checked: false };
          }
          return { ...item, checked: false };
        });

      return [...current, ...newItems];
    });
  };

  const removeFromGroceryList = (name) => {
    setGroceryList((current) =>
      current.filter((item) => item.name.toLowerCase() !== name.toLowerCase()),
    );
  };

  const toggleGroceryItem = (name) => {
    setGroceryList((current) =>
      current.map((item) =>
        item.name.toLowerCase() === name.toLowerCase()
          ? { ...item, checked: !item.checked }
          : item,
      ),
    );
  };

  const clearGroceryList = () => {
    setGroceryList([]);
  };

  const generateGroceryFromRecipe = (recipe) => {
    if (!recipe || !recipe.ingredients) return;

    const items = recipe.ingredients.map((ingredient) => ({
      name: ingredient.name,
      quantity: `${ingredient.amount * servingMultiplier} ${ingredient.unit || ''}`.trim(),
      checked: false,
    }));

    addToGroceryList(items);
  };

  const resetCookingMode = () => {
    setCookingStepIndex(0);
  };

  const value = {
    // Theme
    darkMode,
    setDarkMode,
    toggleDarkMode,

    // Recipes and servings
    selectedRecipe,
    setSelectedRecipe,
    clearSelectedRecipe,
    servingMultiplier,
    setServingMultiplier: updateServingMultiplier,

    // Grocery list
    groceryList,
    addToGroceryList,
    removeFromGroceryList,
    toggleGroceryItem,
    clearGroceryList,
    generateGroceryFromRecipe,

    // Cooking mode
    cookingStepIndex,
    setCookingStepIndex,
    resetCookingMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
