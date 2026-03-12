import React from 'react';

export function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = { sm: 'spinner-border-sm', md: '', lg: 'spinner-border-lg' };
  return (
    <div className="d-flex justify-content-center align-items-center py-5" role="status">
      <div className={`spinner-border text-primary ${sizeClasses[size] || ''}`} aria-hidden="true" />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
