---
title: Introduction to module bundling
privateVideoUrl: https://fullstack.wistia.com/medias/u7rc0usbax
---

The build process for a library has many similarities with applications. We want to take a single entry point, which contains our components, and bundle them together into an output file. When building applications, the target environment is a web browser. [Webpack](https://webpack.js.org/) is a popular module bundler that helps bundle a wide variety of assets into an output that browsers can understand.

For libraries the target environment is often another development environment, not a browser. This changes the type of assets we can produce and the tools required to build them. In this course we will be using [RollupJS](https://rollupjs.org/guide/en/) as our module bundler.

## Module formats

Originally, there was no open standard for importing/exporting JavaScript modules. Over time there have been many formats developed which realize this, each with their own unique benefits. Some common formats include:

- **CommonJS (CJS)**
  - The module system that Node.js has used historically
  - Server-side only
  - `require` and `module.exports`
- **ESModules (ES)**
  - The official specification for a [standard module system](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
  - Can work in server and modern browser environments
  - `import` and `export`
  - _Supports tree-shaking_
    - [Tree-shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/) allows modern bundlers, like Webpack and RollupJS, to remove JavaScript that isn't required for your application to run.
- **Universal Module Definition (UMD)**
  - Allows many different module formats to interact with your library
  - Can work in server and browser environments
  - Unable to tree-shake

## Multi-distribution packages

When we build our library we don't have to choose a single module format. We can provide several formats and reference them with unique entry points in our `package.json`. Popular entry-points include:

- `main`
  - CommonJS entry-point
- `module`
  - ESModules entry-point
- `browser`
  - UMD entry-point

Modern bundlers are able to look at the entry-points to determine which format to consume. In this course we will only be providing CommonJS and ESModules distributions.

## Babel

Module bundling is important, but we still need to produce JavaScript in a format that browsers can understand. Depending on your minimum browser requirements, some modern JavaScript features may not be available. [Babel](https://babeljs.io/docs/en/index.html) is a tool that can help transpile our code into a format that older browsers can understand. Babel also allows other tools and libraries to create presets that improve our code. [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) ensures that our JSX syntax is handled correctly. We will also be using the [styled-components babel plugin](https://styled-components.com/docs/tooling) to improve our CSS-in-JS usages in production.

We will be using Babel in combination with RollupJS to bundle our application.

## Next lesson

In the upcoming lesson we will be adding a similar build process to our component library.
