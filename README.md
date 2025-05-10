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
**css-loader**: processes CSS imports.
**mini-css-extract-plugin**: separates CSS into its own files for production.
**style-loader injects CSS**: into the page in development.
**webpack**: is the bundler that handles assets.
**webpack-cli**: allows Webpack to be run via the command line.