ReactJS/NextJS Internship Project

Project Overview

This repository showcases my implementation for the ReactJS/NextJS internship assignment at Radiant Riches LLC. The objective was to bring to life a website builder's platform based on the provided Figma design. The implementation focuses on modular components, project structure, and responsive design.

Project Features

Modularity: The codebase is meticulously organized with reusable components to ensure maintainability and scalability.
Styling: SCSS has been employed for styling, enhancing the visual aesthetics of the website builder platform.
Responsive Design: The website adapts seamlessly to various devices, ensuring an optimal user experience.

Project Structure

```
.
├── public
│   └── (static assets)
├── src
|    |___assest
|    |    |___(static assets)
│   ├── components
│   │   └── (reusable components)
│   ├── styles
│   │   └── (SCSS files)
│   ├── pages
│   │   └── (NextJS pages)
│   └── (other project files)
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

Figma Design

The project is based on the provided Figma design for a website builder's platform. You can view the original design [here](http://tinyurl.com/figma-intern).

How to Run

1. Clone the repository: `git clone [https://github.com/Silvyjson/Webbuilder-Internship-Assignment.git]`
2. Navigate to the project directory: `cd [project_directory]`
3. Install dependencies: `npm install`
4. Run the project: `npm run dev`


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
