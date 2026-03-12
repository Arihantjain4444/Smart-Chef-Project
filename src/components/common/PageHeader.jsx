import React from 'react';

export function PageHeader({ title, subtitle, children }) {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
      <div>
        <h1 className="h3 mb-1 fw-bold">{title}</h1>
        {subtitle && <p className="text-body-secondary mb-0 small">{subtitle}</p>}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}
