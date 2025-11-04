import { defineConfig } from "vitepress";
 
export default defineConfig({
  // Site
  title: "Wrapped Docs",
  description: "Documentation for the Wrapped platform",
  cleanUrls: true,
  lastUpdated: true,
 
  // Theme
  themeConfig: {
    // Top nav
    nav: [
      { text: "Home", link: "/" },
      {
        text: "About",
        items: [
          { text: "What is Wrapped?", link: "/about/what-is-wrapped" },
          { text: "Why Choose Wrapped?", link: "/about/why-choose-wrapped" },
        ],
      },
      {
        text: "Freelancers",
        items: [{ text: "Features", link: "/freelancers/features" }],
      },
      {
        text: "Companies",
        items: [
          { text: "Features", link: "/companies/features" },
          { text: "Hiring & Reviews", link: "/companies/hiring-and-reviews" },
          { text: "Data & Compliance", link: "/companies/data-and-compliance" },
        ],
      },
      { text: "Roadmap", link: "/roadmap" },
    ],
 
    // Left sidebar
    sidebar: {
      "/about/": [
        {
          text: "About",
          items: [
            { text: "What is Wrapped?", link: "/about/what-is-wrapped" },
            { text: "Why Choose Wrapped?", link: "/about/why-choose-wrapped" },
          ],
        },
      ],
      "/freelancers/": [
        {
          text: "Freelancers",
          items: [{ text: "Features", link: "/freelancers/features" }],
        },
      ],
      "/companies/": [
        {
          text: "Companies",
          items: [
            { text: "Features", link: "/companies/features" },
            { text: "Hiring & Reviews", link: "/companies/hiring-and-reviews" },
            {
              text: "Data & Compliance",
              link: "/companies/data-and-compliance",
            },
          ],
        },
      ],
      "/": [
        // fallback sidebar for pages like / and /roadmap
        {
          text: "Getting Started",
          items: [
            { text: "Home", link: "/" },
            { text: "Roadmap", link: "/roadmap" },
          ],
        },
      ],
    },
 
    // Footer / links (optional)
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
 
 