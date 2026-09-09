export function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-6 md:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
