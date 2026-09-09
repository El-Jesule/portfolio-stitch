export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "web",
    skills: [
      { label: "HTML", highlighted: true },
      { label: "CSS", highlighted: true },
      { label: "JS", highlighted: true },
      { label: "React", highlighted: true },
    ],
    gridSpan: "lg:col-span-7",
  },
  {
    id: "backend",
    title: "Backend",
    icon: "terminal",
    skills: [
      { label: "PHP", highlighted: true },
      { label: "Laravel", highlighted: false },
      { label: "Python", highlighted: true },
      { label: "FastAPI", highlighted: true },
    ],
    gridSpan: "lg:col-span-5",
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: [
      { label: "MySQL", highlighted: true },
      { label: "PostgreSQL", highlighted: true },
      { label: "SQL", highlighted: false },
    ],
    gridSpan: "lg:col-span-6",
  },
  {
    id: "tools",
    title: "Tools & Infra",
    icon: "build",
    skills: [
      { label: "Git", highlighted: true },
      { label: "Docker", highlighted: false },
    ],
    gridSpan: "lg:col-span-6",
  },
];

export const FEATURED_TECH_STACK = [
  { label: "JavaScript", icon: "javascript" },
  { label: "React", icon: "code" },
  { label: "Python", icon: "terminal" },
  { label: "FastAPI", icon: "api" },
];
