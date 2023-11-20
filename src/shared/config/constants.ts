import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Social", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Canim eCommerce",
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
    title: "PlanNao Template",
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
    title: "ECommerce Admin Dashboard",
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
    title: "X-Beat Template",
    description:
      "E-commerce platform specializing in musical instruments and accessories, offering a wide range of products for purchase on their website.",
    tech: [
      "React.JS",
      "React-Router-Dom",
      "React-Icons",
      "Swiper",
      "EsLint",
      "Sass",
      "Search-Filter",
    ],
    code: "https://github.com/devhasibulislam/xBeat-stable",
    live: "https://xbeat-stable.netlify.app",
    thumbnail: "x-beat.png",
    featured: false,
  },

  {
    title: "nLog Blog Template",
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
    code: "https://github.com/devhasibulislam/9T5--nLog-blogs",
    live: "https://9t5-nlog-blogs-client.vercel.app",
    thumbnail: "nLog.png",
    featured: false,
  },

  {
    title: "Canim Blog Template",
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
