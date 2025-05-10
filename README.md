# Webpack
Webpack is a tool for bundling modules in JavaScript applications, grouping resources like JavaScript, CSS, and images into optimized files for the browser. It processes, bundles, and serves files, making it essential in modern web development.

## **Commands**
**npm start**: ***To start the application***. Command used in Node.js projects to run the script defined as the "start" property in the package.json file.
```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```
**node public/main.js**: ***To start the application of webpack***

**npm run build**: run production to minimize .js and .css files in public folder.

## **Dependences**
- **`webpack`**: The core module bundler that compiles and bundles your JavaScript and assets.
- **`webpack-cli`**: Provides the command-line interface to run Webpack commands.
- **`css-loader`**: Lets you import CSS into JavaScript and resolves `@import` and `url()` paths.
- **`style-loader`**: Injects CSS into the DOM using `<style>` tags, typically used during development.
- **`mini-css-extract-plugin`**: Extracts CSS into separate `.css` files, better for production environments.
- **`css-minimizer-webpack-plugin`**: Minifies CSS output to reduce file size and improve load performance.
- **`sass`**: Dart Sass compiler used to convert SCSS/Sass code into standard CSS.
- **`sass-loader`**: A Webpack loader that compiles Sass during the build.
- **`gulp-sass`**: Sass compiler for use with Gulp (not needed if using Webpack only).
- **`terser-webpack-plugin`**: Minifies and optimizes JavaScript code; default in Webpack 5.
- **`cross-env`**: Enables setting environment variables in a cross-platform way for NPM scripts.
