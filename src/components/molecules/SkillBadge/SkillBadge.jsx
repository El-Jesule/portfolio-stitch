import { Badge } from "../../atoms/Badge/Badge.jsx";

export function SkillBadge({ label, highlighted }) {
  return (
    <Badge variant={highlighted ? "highlighted" : "subtle"} withDot={highlighted}>
      {label}
    </Badge>
  );
}
