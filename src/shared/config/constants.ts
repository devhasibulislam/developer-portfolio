import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Social", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Ciseco eCommerce",
    description:
      "Shop seamlessly with top brands, secure transactions, swift deliveries, user-friendly navigation, and exclusive deals. Redefine convenience in our digital marketplace.",
    tech: [
      "Next.JS",
      "Redux",
      "Tailwind-CSS",
      "Vercel",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    code: "https://github.com/devhasibulislam/ciseco-ecommerce",
    live: "https://ciseco-csr.vercel.app",
    thumbnail: "ciseco-ecommerce.png",
    featured: true,
  },

  {
    title: "Travello Booking",
    description:
      "Perfect for all kinds of travel agency. Including tours, hotel booking, activity/event, travel experiences, online booking, room bnb, villa rental, holiday rental, flight ticket, and more.",
    tech: [
      "Next.JS",
      "Redux",
      "Tailwind-CSS",
      "Vercel",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    code: "https://github.com/devhasibulislam/travello-template",
    live: "https://travello-template.vercel.app/",
    thumbnail: "travello-template.png",
    featured: false,
  },

  {
    title: "PlanNao Advisory",
    description:
      "All you need is mentor' is a pioneering ed-tech platform in Bangladesh connecting students with mentors for personalized guidance and bridging the gap between education and success.",
    tech: [
      "Next.JS",
      "Redux",
      "Tailwind-CSS",
      "Vercel",
      "MongoDB",
      "Cloudinary",
      "Nodemailer",
      "JWT",
    ],
    code: "https://github.com/devhasibulislam/plannao-template",
    live: "https://plannao-template.vercel.app",
    thumbnail: "plannao-template.png",
    featured: false,
  },

  {
    title: "nLog Blogging",
    description:
      "A democratic blog platform where users can freely express anti-political views and opinions, fostering open discourse and discussion.",
    tech: [
      "React.JS",
      "Hapi/Joi",
      "Morgan",
      "Express.JS",
      "MongoDB",
      "Axios",
      "DayJS",
      "Mongoose",
    ],
    code: "https://github.com/devhasibulislam/nLog-blogs",
    live: "https://nlog-blogs-csr.vercel.app",
    thumbnail: "nLog.png",
    featured: false,
  },

  {
    title: "ML Prediction Dashboard",
    description:
      "A comprehensive admin dashboard for a machine learning (initial stage usage) prediction website, facilitating user and prediction management, among other functions.",
    tech: [
      "Vite",
      "Redux",
      "Vercel",
      "MUI",
      "MongoDB",
      "Express.JS",
      "Mongoose",
      "Render",
      "Morgan",
    ],
    code: "https://github.com/devhasibulislam/finanseer-clone",
    live: "https://finanseer-clone.vercel.app",
    thumbnail: "finanseer-clone.png",
    featured: false,
  },

  {
    title: "eCommerce Dashboard",
    description:
      "Full-featured e-commerce admin dashboard: Efficiently oversee products, orders, customers, and additional functionalities for seamless website management.",
    tech: [
      "Next.JS",
      "Redux",
      "Vercel",
      "MUI",
      "Nivo",
      "MongoDB",
      "Express.JS",
      "Render",
      "Emotion",
    ],
    code: "https://github.com/devhasibulislam/ecomvision-clone",
    live: "https://ecomvision-clone-client.onrender.com",
    thumbnail: "ecomvision-clone.png",
    featured: false,
  },

  {
    title: "Canim Blogging",
    description:
      "A blog platform offering reading, writing, commenting, liking, and sharing functionalities for users to engage with and create content.",
    tech: [
      "React.JS",
      "Swiper",
      "Express.JS",
      "Cloudinary",
      "Helmet",
      "Redux",
      "MongoDB",
      "Mongoose",
    ],
    code: "https://github.com/devhasibulislam/Nurui",
    live: "https://nurui-csr.vercel.app",
    thumbnail: "canim-blog.png",
  },
];
