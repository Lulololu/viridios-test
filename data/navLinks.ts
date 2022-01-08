export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: Record<NavLinks, NavLink> = {
  sustainableDevelopmentGoals: {
    name: "Sustainable Development Goals",
    href: "/sustainable-development-goals",
  },
  carbonIntensity: {
    name: "Carbon Intensity",
    href: "/carbon-intensity",
  },
  markdownWithLatex: {
    name: "Markdown with LaTeX",
    href: "/markdown-with-latex",
  },
};

//* ** TYPES * **//

// ENUM keys of navLinks Object
enum NavLinks {
  sustainableDevelopmentGoals = "sustainableDevelopmentGoals",
  carbonIntensity = "carbonIntensity",
  markdownWithLatex = "markdownWithLatex",
}
