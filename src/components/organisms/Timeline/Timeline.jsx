import { EDUCATION_TIMELINE } from "../../../data/education.js";
import { TimelineItem } from "../../molecules/TimelineItem/TimelineItem.jsx";

export function Timeline() {
  return (
    <section className="relative">
      <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[2px] bg-[#27272a]" />
      <div className="flex flex-col gap-8">
        {EDUCATION_TIMELINE.map((item) => (
          <TimelineItem
            key={item.id}
            period={item.period}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
}
