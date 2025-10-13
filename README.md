# Personal Portfolio

A modern, responsive personal portfolio website built with React.

## 🚀 Live Site

Visit the live portfolio at: [https://husnajakeer.github.io/personal-portfolio/](https://husnajakeer.github.io/personal-portfolio/)

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js and npm installed
- Git configured with your GitHub credentials
- All changes committed to the main branch

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production
```bash
npm run build
```
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 🚀 Deployment Instructions

### Quick Deploy
For future deployments, simply run:
```bash
npm run deploy
```

This single command will:
1. Automatically build the project (`npm run build`)
2. Deploy the built files to the `deployment-new` branch
3. Make your changes live on GitHub Pages

### Step-by-Step Deployment Process

1. **Commit your changes** to the main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Verify deployment** by checking:
   - The `deployment-new` branch on GitHub
   - Your live site at the URL above

### Current Deployment Configuration

The project is configured to deploy to the `deployment-new` branch using the following setup in `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build -b deployment-new --add"
  }
}
```

**Configuration Details:**
- `predeploy`: Automatically runs `npm run build` before deployment
- `deploy`: Uses `gh-pages` package to deploy the `build` folder
- `-d build`: Specifies the build directory to deploy
- `-b deployment-new`: Targets the `deployment-new` branch
- `--add`: Only adds files (avoids the `spawn E2BIG` error)

### GitHub Pages Setup

To ensure your site is served from the correct branch:

1. Go to your GitHub repository: [https://github.com/husnajakeer/personal-portfolio](https://github.com/husnajakeer/personal-portfolio)
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment" → "Source", select **Deploy from a branch**
5. Choose **deployment-new** as the source branch
6. Click **Save**

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Logo.js         # Animated logo component
│   ├── navbar.js       # Navigation bar
│   ├── project-card.js # Project display cards
│   └── ...
├── sections/           # Main page sections
│   ├── about.js        # About section
│   ├── projects.js     # Projects showcase
│   ├── skills.js       # Skills section
│   └── ...
├── styles/            # CSS stylesheets
├── images/            # Static images and assets
└── App.js            # Main application component
```

## 🎨 Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional design
- **Interactive Elements**: Smooth animations and transitions
- **Project Showcase**: Highlight your best work
- **Skills Display**: Showcase your technical abilities
- **Contact Information**: Easy ways for visitors to reach you

## 🔧 Troubleshooting

### Common Issues

**Deployment fails with `spawn E2BIG` error:**
- The `--add` flag in the deploy script resolves this issue
- This error occurs when there are too many files to process

**Build fails:**
- Ensure all dependencies are installed: `npm install`
- Check for any syntax errors in your code
- Verify all imports are correct

**Site not updating after deployment:**
- Check that GitHub Pages is configured to use the `deployment-new` branch
- Wait a few minutes for GitHub Pages to rebuild
- Clear your browser cache

### Getting Help

If you encounter issues:
1. Check the terminal output for specific error messages
2. Verify your git configuration: `git config --list`
3. Ensure you have push access to the repository
4. Check GitHub Pages settings in your repository

## 📝 Notes

- The site is configured to be hosted at `/personal-portfolio/` (as specified in `package.json` homepage field)
- All builds are optimized for production with minified CSS and JavaScript
- The deployment process automatically handles file optimization and caching

## 🎯 Future Improvements

Consider these enhancements:
- Add a blog section
- Implement dark/light mode toggle
- Add more interactive animations
- Include a contact form
- Add analytics tracking

---

**Happy coding!** 🚀
