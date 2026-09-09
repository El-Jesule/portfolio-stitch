export function Input({ label, id, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium tracking-wide text-on-surface-variant">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 rounded bg-bg-canvas border text-on-surface placeholder:text-outline transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_0_2px_rgba(99,102,241,0.1)] ${error ? "border-red-500" : "border-border-subtle"} ${className}`.trim()}
        {...props}
      />
      {error && <span className="text-xs text-red-400 light:text-red-600">{error}</span>}
    </div>
  );
}
