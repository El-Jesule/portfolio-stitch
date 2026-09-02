import { Icon } from "../../atoms/Icon/Icon.jsx";

export function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#161618] border border-[#27272a] rounded-lg p-6 flex flex-col gap-4 hover:border-[#6366f1] transition-colors group">
      <div className="w-12 h-12 rounded bg-[#1f1f22] flex items-center justify-center text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-colors">
        <Icon name={icon} filled />
      </div>
      <h3 className="text-lg font-semibold text-[#e4e1e5]">{title}</h3>
      <p className="text-sm leading-6 text-[#c7c4d7]">{description}</p>
    </div>
  );
}
