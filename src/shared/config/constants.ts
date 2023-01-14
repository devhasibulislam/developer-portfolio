import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Canim Blog",
    description:
      "Contain real-time watches, likes and comments tracking. Individual admin and user dashboard with tags and posts CRUD prodigies. Also contain authentication like login, registration and forgot password system",
    tech: ["React js", "Tailwind CSS", "Express js", "MongoDB"],
    code: "https://github.com/hasibulislam999/Nurui",
    live: "https://nurui-csr.vercel.app/",
    thumbnail: "canim-blog.png",
    featured: true,
  },

  {
    title: "X-Beat Store",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/xBeat-stable",
    live: "https://xbeat-stable.netlify.app/",
    thumbnail: "x-beat.png",
    featured: true,
  },

  {
    title: "Canim Inventory",
    description: "Maintenance & patches are shutdown.",
    tech: ["React js", "tailwind CSS", "Redux", "Node js"],
    code: "https://github.com/hasibulislam999/Canim",
    live: "https://canim.vercel.app/",
    thumbnail: "canim-store1.png",
  },

  {
    title: "Canim Store",
    description: "Maintenance & patches are shutdown.",
    tech: ["React js", "tailwind CSS", "Redux", "Node js"],
    code: "https://github.com/hasibulislam999/e-commerce-csr",
    live: "https://e-commerce-csr.vercel.app/",
    thumbnail: "canim-store2.png",
  },

  {
    title: "Amazon Clone",
    description:
      "Integrted Auth0 authentication for login, registration and forgot password also Google sign in. Contain complete carting system.",
    tech: ["React js", "tailwind CSS", "Redux", "Node js"],
    code: "https://github.com/hasibulislam999/amazon-clone-simple",
    live: "https://amazon-clone-simple.vercel.app/",
    thumbnail: "amazon-clone.png",
  },

  {
    title: "Portfolio",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/Portfolio",
    live: "https://pofo-portfolio.vercel.app/",
    thumbnail: "old-portfolio.png",
  },

  {
    title: "The Event",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/demo-theEvent",
    live: "https://hasibulislam999.github.io/demo-theEvent/",
    thumbnail: "the-event.png",
  },

  {
    title: "Moderna",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/demo-mordana",
    live: "https://hasibulislam999.github.io/demo-mordana/",
    thumbnail: "moderna.png",
  },

  {
    title: "Bethany",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/demo-bethany",
    live: "https://hasibulislam999.github.io/demo-bethany/",
    thumbnail: "bethany.png",
  },

  {
    title: "Arsha",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/demo-arsha",
    live: "https://hasibulislam999.github.io/demo-arsha/",
    thumbnail: "arsha.png",
  },

  {
    title: "Logo Tech",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/logo-tech",
    live: "https://logo-tech.vercel.app/",
    thumbnail: "logo-tech.png",
  },
];
