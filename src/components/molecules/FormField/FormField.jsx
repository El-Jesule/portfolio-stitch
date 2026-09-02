import { Input } from "../../atoms/Input/Input.jsx";
import { Textarea } from "../../atoms/Textarea/Textarea.jsx";

export function FormField({ type = "text", ...props }) {
  if (type === "textarea") {
    return <Textarea {...props} />;
  }
  return <Input {...props} type={type} />;
}
