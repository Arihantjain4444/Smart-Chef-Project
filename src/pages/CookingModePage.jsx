import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/useAppContext';
import { MOCK_RECIPES } from '../data/mockRecipes';

export function CookingModePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedRecipe, cookingStepIndex, setCookingStepIndex, resetCookingMode } =
    useAppContext();

  const recipe = selectedRecipe || MOCK_RECIPES.find((r) => r.id === id);
  const steps = recipe?.steps || [];
  const currentStep = steps[cookingStepIndex];
  const isLastStep = cookingStepIndex >= steps.length - 1;
  const isFirstStep = cookingStepIndex <= 0;

  const [timerSeconds, setTimerSeconds] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (!isTimerRunning || timerSeconds === null || timerSeconds <= 0) {
      return;
    }
    const interval = setInterval(() => {
      setTimerSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const exitCookingMode = () => {
    resetCookingMode();
    navigate(`/recipe/${id}`);
  };

  const goNext = () => {
    if (isLastStep) {
      exitCookingMode();
    } else {
      const nextIndex = cookingStepIndex + 1;
      setCookingStepIndex(nextIndex);
      setTimerSeconds(null);
      setIsTimerRunning(false);
    }
  };

  const goPrev = () => {
    if (!isFirstStep) {
      const prevIndex = cookingStepIndex - 1;
      setCookingStepIndex(prevIndex);
      setTimerSeconds(null);
      setIsTimerRunning(false);
    }
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!recipe) {
    return (
      <div className="cooking-mode vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <p>Recipe not found.</p>
        <button className="btn btn-light ms-2" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="cooking-mode vh-100 d-flex flex-column bg-dark text-white position-fixed top-0 start-0 end-0 bottom-0" style={{ zIndex: 1050 }}>
      <header className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
        <button className="btn btn-outline-light btn-sm" onClick={exitCookingMode}>
          ✕ Exit
        </button>
        <h5 className="mb-0 fw-bold">{recipe.title}</h5>
        <span className="badge bg-secondary">
          Step {cookingStepIndex + 1} / {steps.length}
        </span>
      </header>

      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4 text-center">
        {currentStep ? (
          <>
            <p className="display-6 fw-light mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              {currentStep.text}
            </p>
            {currentStep.duration && (
              <div className="timer-box p-4 rounded-circle bg-secondary bg-opacity-25 mb-4">
                <div className="display-4 fw-bold font-monospace">
                  {timerSeconds !== null ? formatTime(timerSeconds) : formatTime(Math.ceil(currentStep.duration / 60))}
                </div>
                <div className="d-flex gap-2 justify-content-center mt-2">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => {
                      if (timerSeconds === null && currentStep?.duration) {
                        setTimerSeconds(Math.ceil(currentStep.duration / 60));
                      }
                      setIsTimerRunning((prev) => !prev);
                    }}
                    disabled={timerSeconds === 0}
                  >
                    {isTimerRunning ? 'Pause' : 'Start'}
                  </button>
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() => {
                      setTimerSeconds(Math.ceil(currentStep.duration / 60));
                      setIsTimerRunning(false);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>No steps available.</p>
        )}
      </main>

      <footer className="d-flex justify-content-between align-items-center p-3 border-top border-secondary">
        <button
          className="btn btn-outline-light"
          onClick={goPrev}
          disabled={isFirstStep}
        >
          ← Previous
        </button>
        <button className="btn btn-primary px-4" onClick={goNext}>
          {isLastStep ? 'Finish' : 'Next →'}
        </button>
      </footer>
    </div>
  );
}
