# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Customizable themes (Light/Dark mode)
- 🎯 Multiple color schemes (Blue, Purple, Green, Orange)
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🎭 Smooth animations and transitions
- 📧 Contact form with validation
- 🛠️ Skills showcase with progress bars
- 💼 Project portfolio with filtering
- 📄 Experience timeline
- 🎨 Multiple font options

## Local Development Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project as a zip file, extract it
   # If using git:
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The site should load with hot-reload enabled

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

### Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal details (name, title, bio)
- Contact information
- Skills and experience
- Projects
- Education

### Styling

- **Colors**: Modify color schemes in `src/hooks/useTheme.ts`
- **Fonts**: Add new fonts in `tailwind.config.js` and `src/index.css`
- **Layout**: Adjust components in `src/components/`

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Option 1: Drag and drop the `dist` folder to Netlify
   - Option 2: Connect your GitHub repository to Netlify
   - Option 3: Use Netlify CLI

### Other Deployment Options

- **Vercel**: Connect your GitHub repo to Vercel
- **GitHub Pages**: Use GitHub Actions for deployment
- **Firebase Hosting**: Use Firebase CLI

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Experience.tsx  # Work experience
│   └── Contact.tsx     # Contact form
├── data/
│   └── portfolio.ts    # Portfolio data
├── hooks/
│   └── useTheme.ts     # Theme management
├── types/
│   └── index.ts        # TypeScript types
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Build tool
- **Lucide React** - Icons
- **ESLint** - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).