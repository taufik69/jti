import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  children: ReactNode;
  required?: boolean;
  hint?: string;
  error?: string;
}

/** Label, optional hint and inline error. Pass `${id}-error` / `${id}-hint` to aria-describedby. */
export function Field({ id, label, children, required = false, hint, error }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.9375rem] font-medium text-ink">
        {label}
        {required ? (
          <span className="text-plum-700"> *</span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="-mt-1 text-[0.875rem] text-muted">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-[0.875rem] text-error">
          {error}
        </p>
      )}
    </div>
  );
}
