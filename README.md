# 🚀 Hasibul Islam - Portfolio

A stunning, modern portfolio website built with cutting-edge technologies and beautiful animations inspired by Aceternity UI design principles.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-FF0055)

## ✨ Features

### 🎨 **Stunning Visual Design**

- **Dark & Light Theme**: Modern dark & light themes with beautiful gradients
- **Animated Background**: Floating particles and gradient effects
- **Glass Morphism**: Beautiful glass effects and backdrop blur
- **Gradient Text**: Eye-catching gradient text effects
- **Custom Scrollbar**: Styled scrollbar with gradient colors

### 🎬 **Smooth Animations**

- **Framer Motion**: Sophisticated animations powered by Framer Motion
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover animations throughout
- **Loading Animations**: Beautiful loading and transition effects
- **Typing Effects**: Dynamic typing animations

### 📱 **Responsive Design**

- **Mobile-First**: Fully responsive across all devices
- **Touch-Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized performance and fast loading times
- **SEO Optimized**: Proper meta tags and structured data

### 🧩 **Sections**

1. **Hero Section**: Stunning animated introduction with floating particles
2. **About Me**: Personal information with animated profile card
3. **Projects**: Interactive project showcase with hover effects
4. **Skills**: Animated skill bars with technology categories
5. **Experience**: Professional timeline with achievements
6. **Contact**: Call-to-action section with contact information

## 🛠️ Tech Stack

### **Frontend Framework**

- **Next.js 15.3** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - Latest React features

### **Styling & Animation**

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations library
- **CSS Custom Properties** - Dynamic theming
- **Custom CSS Animations** - Hand-crafted effects

### **Icons & Assets**

- **Iconifyt** - Beautiful, customizable icons
- **Google Fonts (Space Grotesk)** - Modern typography

### **Development Tools**

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/devhasibulislam/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### **Personal Information**

Update the following in `src/app/page.tsx`:

- Name and title in the navigation and hero section
- Contact information (email, phone, location)
- Social media links (GitHub, LinkedIn, etc.)
- About me description and background

### **Projects**

Modify the `projects` array in `src/components/portfolio/ProjectsSection.tsx`:

```typescript
{
  title: "Your Project Title",
  description: "Project description...",
  image: "🎯", // Emoji or image URL
  tech: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/repo",
  live: "https://yourproject.com",
  color: "from-blue-500 to-purple-500"
}
```

### **Skills**

Update skills in the skills section of `src/components/portfolio/TechStackSection.tsx`:

```typescript
{
  category: "Frontend",
  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
}
```

### **Experience**

Modify the experience array in `src/components/portfolio/ExperienceSection.tsx`:

```typescript
{
  role: "Your Role",
  company: "Company Name",
  period: "2023 - Present",
  description: "Role description...",
  achievements: ["Achievement 1", "Achievement 2"]
}
```

### **Styling**

- **Colors**: Update color schemes in `tailwind.config.js`
- **Animations**: Customize animations in `src/app/globals.css`
- **Components**: Modify components in the `src/components/` directory

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles and animations
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main portfolio page
│   │   ├── favicon.ico         # Site favicon
│   │   └── favicon.png         # PNG favicon
│   ├── components/
│   │   ├── portfolio/          # Portfolio-specific components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── Background.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── OverviewSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TypewriterRole.tsx
│   │   │   └── index.ts        # Component exports
│   │   ├── AnimatedBackground.tsx
│   │   ├── PostHogProvider.tsx # Analytics provider
│   │   ├── SocketioIcon.tsx
│   │   ├── ThemeProvider.tsx   # Theme context provider
│   │   └── ThemeToggle.tsx     # Dark/light theme toggle
├── lib/
│   ├── posthog.ts             # PostHog analytics configuration
│   └── utils.ts               # Utility functions
├── public/
│   ├── certificates/          # Certificate images
│   ├── CV.pdf                # Resume/CV file
│   ├── globe.svg             # SVG icons
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── file.svg
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── next-env.d.ts           # Next.js TypeScript declarations
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

=

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/devhasibulislam/portfolio/issues).

## 👨‍💻 Author

**Hasibul Islam**

- Portfolio: [https://devhasibulislam.vercel.app](https://devhasibulislam.vercel.app)
- GitHub: [@devhasibulislam](https://github.com/devhasibulislam)
- LinkedIn: [LinkedIn](https://linkedin.com/in/devhasibulislam)
- Email: devhasibulislam@gmail.com

## 🙏 Acknowledgments

- **Framer Motion** - Amazing animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js Team** - Excellent React framework
- **Iconify** - Beautiful icon library

---

**Made with ❤️ and cutting-edge web technologies**

_This portfolio demonstrates modern web development practices and showcases the beauty of well-crafted user interfaces._
