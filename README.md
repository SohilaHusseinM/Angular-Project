# Angular Multi-Feature Project

A collection of small Angular sub-projects demonstrating core concepts and features. Includes user authentication, product management, dynamic UI components, and more.

![Project Preview](demo.gif) 

## 🚀 Features
- **User Authentication**  
  - Login/Register forms with validation (email, password strength, age).
  - Error handling for invalid inputs (e.g., "Email Not Valid", "Weak Password").
- **Product Management**  
  - Add products with name, description, image URL, and rating.
  - Form validation for product details.
- **Dynamic UI Components**  
  - Slide show with navigation controls (Prev/Next, Stop).
  - Responsive data tables (e.g., user registration table).
- **About Page**  
  - Mission statement and team information section.
- **Responsive Navigation**  
  - Top navigation bar (Home, Product, Login, Register, About).

## 🔧 Core Implementation Details
### 📦 Modules
- Feature modules for `Auth`, `Product`, and `Shared` components.
- Lazy-loaded modules for optimized performance.

### 🧭 Routing
- Routes for `/home`, `/products`, `/login`, `/register`, `/about`.
- Route parameters for dynamic content (e.g., product details).

### 📝 Forms
- **Template-driven forms** for login/register.
- **Reactive forms** for product creation.
- Custom validators (e.g., password strength, age restrictions).

### 🎨 UI & Styling
- **Angular Material** components (forms, buttons, tables).
- **Bootstrap** grid system for responsive layouts.
- Custom CSS for themes and animations.

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SohilaHusseinM/Angular-Project.git

# Nproject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
#Angular-Project
