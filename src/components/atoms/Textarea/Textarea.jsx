export function Textarea({ label, id, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium tracking-wide text-[#c7c4d7]">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`w-full px-4 py-3 rounded bg-[#0a0a0c] border text-[#e4e1e5] placeholder:text-[#908fa0] transition-all resize-none focus:outline-none focus:border-[#6366f1] focus:shadow-[0_0_0_2px_rgba(99,102,241,0.1)] ${error ? "border-red-500" : "border-[#27272a]"} ${className}`.trim()}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
