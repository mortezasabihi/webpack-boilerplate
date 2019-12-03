# Webpack Boilerplate
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](http://ForTheBadge.com) [![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](http://ForTheBadge.com) [![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com) 

Basic Webpack 4 boilerplate.

## Installation

```
git clone git@github.com:mortezasabihi/webpack-boilerplate.git

npm install
```

## Usage

### Production build

```
npm run build
```

### Development server

```
npm run dev
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Sass](https://sass-lang.com/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code.
  -- [`eslint`](https://github.com/eslint/eslint) - ESLint.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
- [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader/) - ESlint loader for webpack.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS.
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM.
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files to build folder.
- [`url-loader`](https://webpack.js.org/loaders/url-loader/) - Encode and inline files. Falls back to file-loader.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin/) - Remove/clean build folders. 
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin/) - Generate HTML files from template. 
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin/) - Extract CSS into separate files. 
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier/) - ESLint plugin for Prettier formatting. 

## Author

- [Morteza Sabihi](https://github.com/mortezasabihi)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/mortezasabihi/)

## License

This project is open source and available under the [MIT License](https://github.com/mortezasabihi/webpack-boilerplate/blob/master/LICENSE).
