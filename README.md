# Portfolio Website

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS. Features dark and light theme support with custom color palettes.

## Features

- 🌙 **Dark & Light Theme Support** - Toggle between beautiful custom color palettes
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js 13+ and optimized for speed
- 🎨 **Custom Color Palettes** - Carefully crafted color schemes for both themes
- 🖼️ **Dynamic Images** - Theme-aware image switching
- ♿ **Accessible** - Built with accessibility in mind
- 🔧 **TypeScript** - Full type safety throughout the application

## Color Palettes

### Dark Theme
- **Dark Red**: #3D0A05
- **Grey Beige**: #A58570
- **Ruby Red**: #7F1F0E
- **Silk**: #DAC1B1
- **Indian Red**: #AC746C

### Light Theme
- **Rose Quartz**: #F9CBD6
- **Blush**: #F2AFBC
- **Red Wine**: #9E182B
- **Oat Milk**: #F2E0D2

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Content

### 1. Personal Information
Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/Footer.tsx` - Update contact information and social links
- `src/app/layout.tsx` - Update metadata (title, description, etc.)

### 2. Images
Replace the placeholder images in the following directories:

- `public/images/dark/profile.png` - Your dark theme profile picture (400x400px recommended)
- `public/images/light/profile.png` - Your light theme profile picture (400x400px recommended)
- `public/images/dark/project1.jpg` - Dark theme project 1 image (400x300px recommended)
- `public/images/light/project1.jpg` - Light theme project 1 image (400x300px recommended)
- `public/images/dark/project2.jpg` - Dark theme project 2 image (400x300px recommended)
- `public/images/light/project2.jpg` - Light theme project 2 image (400x300px recommended)
- `public/images/dark/project3.jpg` - Dark theme project 3 image (400x300px recommended)
- `public/images/light/project3.jpg` - Light theme project 3 image (400x300px recommended)

### 3. Projects
Update the projects array in `src/components/Projects.tsx` with your actual projects:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Next.js', 'TypeScript'],
    image: 'project1.jpg',
    liveUrl: 'https://your-project-url.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  // Add more projects...
];
```

### 4. Skills
Update the skills array in `src/components/Hero.tsx`:

```typescript
{[
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'GraphQL'
].map((tech) => (
  // ... existing code
))}
```

## Project Structure

```
portfolio/
├── public/
│   └── images/
│       ├── dark/          # Dark theme images
│       └── light/         # Light theme images
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with theme provider
│   │   ├── page.tsx       # Main page component
│   │   └── globals.css    # Global styles and theme variables
│   ├── components/
│   │   ├── ThemeProvider.tsx  # Theme context and provider
│   │   ├── Navbar.tsx         # Navigation with theme toggle
│   │   ├── Hero.tsx           # Hero section with profile
│   │   ├── Projects.tsx       # Projects showcase
│   │   └── Footer.tsx         # Footer with contact info
│   └── lib/
│       └── theme.ts       # Theme utilities
├── tailwind.config.js     # Tailwind configuration with custom colors
└── package.json
```

## Customization

### Colors
The color palettes are defined in `tailwind.config.js`. You can modify the colors there and they will be available throughout the application.

### Styling
The application uses Tailwind CSS with custom color classes. All components are styled using the theme-aware color classes.

### Theme Toggle
The theme toggle is implemented in the Navbar component and uses React Context for state management. The theme preference is stored in localStorage.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 13+** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Context** - State management for theme
- **Next.js Image** - Optimized image loading
- **ESLint** - Code linting and formatting

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, please open an issue or contact me directly.