GDT — Video Editor · Filmmaker · Creator

Portfolio audiovisual profesional desarrollado con Next.js, React, TypeScript y Tailwind CSS.

🌐 Live: https://gabitomedia.vercel.app/

📦 Repository: https://github.com/Gabitomedia/gabitoweb

📸 Preview

Desktop

![GDT Portfolio — Full Website](./public/images/portfolio-full.webp)



Mobile

![GDT Portfolio — Mobile](./public/images/portfolio-mobile.webp)




🎬 About the project

GDT is a personal portfolio website created to showcase professional work in:

Video editing
Filmmaking
Content creation
Commercial video
Music videos
AI-generated video projects

The website was designed and developed from scratch with a focus on a modern, cinematic and minimal visual identity inspired by contemporary interfaces such as Apple, Linear and Vercel.

The project combines audiovisual content with a responsive web interface, smooth animations and optimized external video delivery.

✨ Features

Responsive design for desktop, tablet and mobile
Cinematic hero section with showreel
Interactive project showcase
Video playback directly inside project cards
Smooth UI animations and transitions
Services section
About section
Contact section
Social media links
Responsive navigation
Optimized image assets
External video hosting through Cloudinary
Automatic production deployments through Vercel
Git-based development workflow

🛠️ Tech Stack

Frontend
Next.js 16
React
TypeScript
Tailwind CSS
UI & Animation
Framer Motion
Lucide React
Media
Cloudinary — video hosting and delivery
Development & Deployment
Git
GitHub
Vercel

🏗️ Architecture

The project follows a component-based architecture using the Next.js App Router.

gabitoweb/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── public/
│   ├── images/
│   │   └── *.webp
│   └── videos/
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── .gitignore
Component structure
App
│
├── Navbar
│
├── Hero
│   └── Showreel
│
├── Projects
│   └── Project cards
│       └── Cloudinary video
│
├── Services
│
├── About
│
├── Contact
│
└── Footer

The interface is divided into reusable React components rather than placing the entire page inside a single component.

🎥 Video Architecture

Large video files are not stored inside the Git repository.

Instead, portfolio videos are hosted through Cloudinary and loaded using their delivery URLs.

User
 │
 ▼
Vercel
 │
 ▼
Next.js application
 │
 ├── Images → /public/images
 │
 └── Videos → Cloudinary
                    │
                    ▼
                 CDN delivery

This approach keeps the Git repository lightweight while allowing the portfolio to serve large audiovisual files efficiently.

The local public/videos directory is excluded from Git using .gitignore.

/public/videos/*.mp4
🎨 Design

The visual direction combines:

Dark interface
High-contrast typography
Violet accent colors
Large cinematic media
Minimal UI
Rounded cards
Glass / translucent surfaces
Smooth motion
Responsive layouts

The goal was to keep the interface visually focused on the audiovisual work rather than competing with it.

📱 Responsive Design

The website was designed to adapt to different screen sizes.

Desktop
┌──────────────────────────────────────┐
│              Navbar                  │
│                                      │
│             Hero / Showreel          │
│                                      │
│             Projects                 │
│                                      │
│       Services / About / Contact     │
└──────────────────────────────────────┘


Mobile
┌──────────────────┐
│      Navbar      │
│                  │
│     Showreel     │
│                  │
│     Projects     │
│                  │
│     Services     │
│                  │
│      About       │
│                  │
│     Contact      │
└──────────────────┘
🚀 Getting Started
Requirements
Node.js
npm
Git
Clone the repository
git clone https://github.com/Gabitomedia/gabitoweb.git
cd gabitoweb
Install dependencies
npm install
Run development server
npm run dev

Open:

http://localhost:3000
🏭 Production Build

To create a production build:

npm run build

To run the production version locally:

npm run start
☁️ Deployment

The project is deployed using Vercel.

GitHub
   │
   │ git push
   ▼
Vercel
   │
   │ automatic build
   ▼
Production deployment
   │
   ▼
https://gabitomedia.vercel.app/

Every push to the main branch can trigger a new production deployment.

🔄 Development Workflow

The project uses Git for version control.

Typical workflow:

git add .
git commit -m "Update portfolio"
git push

After pushing changes to GitHub, Vercel handles the deployment automatically.

📂 Media Strategy

Large audiovisual files are intentionally kept outside GitHub.

Stored in the repository
Source code
Components
Styles
Configuration
Optimized image thumbnails
SVG assets
Hosted externally
Showreel
Music videos
Commercial projects
AI video projects
Gaming projects

This keeps the repository small and makes deployment through GitHub and Vercel practical.

🔗 Links

Portfolio

https://gabitomedia.vercel.app/

GitHub

https://github.com/Gabitomedia/gabitoweb

👤 Author

Gabito / GDT

Video Editor · Filmmaker · Creator

Portfolio: https://gabitomedia.vercel.app/

📄 License

This repository contains personal portfolio work and is intended primarily for demonstration and professional presentation.

Please do not reuse the audiovisual content or personal branding without permission.