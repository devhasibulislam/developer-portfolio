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
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/hasibulislam999/Nurui",
    live: "https://nurui-csr.vercel.app/",
    thumbnail: "canim-blog.png",
    featured: true,
  },

  {
    title: "X-Beat Store",
    description:
      "Display products as slide-show. Cart each product and approach increment-decrement with checkout as demo. See product description. Filter all products based on suggested category.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/xBeat-stable",
    live: "https://xbeat-stable.netlify.app/",
    thumbnail: "x-beat.png",
    featured: true,
  },

  {
    title: "Canim Inventory",
    description:
      "Maintenance & patches are shutdown. A semi-complete inventory platform. Which convey functional features, to access panel must contact me.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/hasibulislam999/Canim",
    live: "https://canim.vercel.app/",
    thumbnail: "canim-store1.png",
  },

  {
    title: "Canim Store",
    description:
      "Maintenance & patches are shutdown. A semi-complete e-commerce platform. Which convey functional features, to access panel must contact me.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/hasibulislam999/e-commerce-csr",
    live: "https://e-commerce-csr.vercel.app/",
    thumbnail: "canim-store2.png",
  },

  {
    title: "Amazon Clone",
    description:
      "Integrated Auth0 authentication for login, registration and forgot password also Google sign in. Contain complete real-time carting system.",
    tech: ["React js", "tailwind CSS", "Context API"],
    code: "https://github.com/hasibulislam999/amazon-clone-simple",
    live: "https://amazon-clone-simple.vercel.app/",
    thumbnail: "amazon-clone.png",
  },

  {
    title: "Portfolio",
    description:
      "Maintenance & patches are shutdown. But my previous work-flow still existing and responsive as go thereby. By the by you can contact me from there. Also collect my minimal projects.",
    tech: ["Next js 13", "TypeScript", "React-Bootstrap 5"],
    code: "https://github.com/hasibulislam999/Portfolio",
    live: "https://pofo-portfolio.vercel.app/",
    thumbnail: "old-portfolio.png",
  },

  {
    title: "The Event",
    description:
      "It's an event organizing or event inspiration website. Which can obey an event and represent it's sweet and angular options which although can retain the semantics of any location.",
    tech: ["HTML5", "CSS3", "JQuery-CDN", "AOS"],
    code: "https://github.com/hasibulislam999/demo-theEvent",
    live: "https://hasibulislam999.github.io/demo-theEvent/",
    thumbnail: "the-event.png",
  },

  {
    title: "Moderna",
    description:
      "Office stuff entertainment solution based. That require stuffs information and gather them to analyze and finally reveal them weather it's static site just to illustrate the visions.",
    tech: ["HTML5", "CSS3", "JQuery-CDN", "AOS"],
    code: "https://github.com/hasibulislam999/demo-mordana",
    live: "https://hasibulislam999.github.io/demo-mordana/",
    thumbnail: "moderna.png",
  },

  {
    title: "Bethany",
    description:
      "Tree based health-care solutions like tree medicines, tree shops, about tree comprehensive. Locality of tree warehouse and build connection with tree solution vendors.",
    tech: ["HTML5", "CSS3", "JQuery-CDN", "AOS"],
    code: "https://github.com/hasibulislam999/demo-bethany",
    live: "https://hasibulislam999.github.io/demo-bethany/",
    thumbnail: "bethany.png",
  },

  {
    title: "Arsha",
    description:
      "Provide multi-types solutions in business to scale it as a next level concern. But this is a static website which radially used for display as a project but as taking ideas it's literally best.",
    tech: ["HTML5", "CSS3", "JQuery-CDN", "AOS"],
    code: "https://github.com/hasibulislam999/demo-arsha",
    live: "https://hasibulislam999.github.io/demo-arsha/",
    thumbnail: "arsha.png",
  },

  {
    title: "Logo Tech",
    description:
      "Contain authentication like login, register and forgot password at real time. An UI design based landing page which contain some sections that relay or indicate about to something.",
    tech: ["React js", "JavaScript", "Bootstrap 5"],
    code: "https://github.com/hasibulislam999/logo-tech",
    live: "https://logo-tech.vercel.app/",
    thumbnail: "logo-tech.png",
  },
];
