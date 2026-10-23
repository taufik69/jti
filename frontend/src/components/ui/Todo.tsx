interface TodoProps {
  children: string;
}

/** Visible placeholder for facts JTI still has to supply. Search the codebase for "<Todo". */
export function Todo({ children }: TodoProps) {
  return (
    <span className="inline-flex h-7 items-center rounded-control border border-dashed border-plum-300 px-2.5 text-[0.8125rem] text-plum-700">
      TODO: {children}
    </span>
  );
}
