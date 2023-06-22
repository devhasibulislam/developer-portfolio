import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "ML Prediction Dashboard",
    description:
      "Complete admin dashboard for a machine learning prediction website where you can manage users, predictions, and more.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/developer-hasibulislam/finanseer-clone",
    live: "https://finanseer-clone.vercel.app/",
    thumbnail: "finanseer-clone.png",
    featured: true,
  },

  {
    title: "ECommerce Admin Dashboard",
    description:
      "Complete admin dashboard for an ecommerce website where you can manage products, orders, customers, and more.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/developer-hasibulislam/ecomvision-clone",
    live: "https://ecomvision-clone-client.onrender.com/",
    thumbnail: "ecomvision-clone.png",
    featured: true,
  },

  {
    title: "Airbnb Clone",
    description:
      "A clone of Airbnb website where you can book hotels, rooms, and other places to stay.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/developer-hasibulislam/airbnb-clone",
    live: "https://airbnb-clone-blue-kappa.vercel.app/",
    thumbnail: "airbnb-clone.png",
    featured: true,
  },

  {
    title: "X-Beat Store",
    description:
      "A music store website where you can buy musical instruments and accessories.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/hasibulislam999/xBeat-stable",
    live: "https://xbeat-stable.netlify.app/",
    thumbnail: "x-beat.png",
    featured: false,
  },

  {
    title: "nLog Blog",
    description:
      "A blog website which is a democratic platform to write anti-political stuffs. ",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/hasibulislam999/9T5--nLog-blogs",
    live: "https://9t5-nlog-blogs-client.vercel.app/",
    thumbnail: "nLog.png",
    featured: false,
  },

  {
    title: "Canim Blog",
    description:
      "A blog website where you can read blogs, write blogs, comment on blogs, like blogs, and share blogs.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/hasibulislam999/Nurui",
    live: "https://nurui-csr.vercel.app/",
    thumbnail: "canim-blog.png",
  },
];
