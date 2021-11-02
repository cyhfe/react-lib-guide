---
title: Build configuration
privateVideoUrl: https://fullstack.wistia.com/medias/r3fp5vx6lz
---

Our build process will require us to configure Babel and RollupJS separately.

## Entry-point

Before we can configure our build, we need to create an entry-point for our library. This module will export all of the applicable components, APIs, and TypeScript values that we want to make publicly consumable. We will create the file: `src/index.ts`.

```bash
touch src/index.ts
```

```tsx
// File: src/index.ts

export * from './buttons/Button';
export * from './fields/Field';
```

This module will export all of the components and types defined for our `Button` and `Field` components.

## Babel

Our Storybook environment is already using Babel internally. You can see some existing Babel dependencies in our `package.json`. We will be adding some additional presets and plugins that match our requirements. Install the following packages:

```bash
npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-plugin-styled-components

npm install @babel/runtime
```

Each package has a specific purpose:

- `@babel/preset-env` allows us to target specific browser environments when transpiling our code

- `@babel/preset-react` a combination of plugins that allows us to use JSX and other React features

- `@babel/preset-typescript` allows Babel to consume TypeScript (without type checking)

- `babel-plugin-styled-components` improves debugging and minification of styles in production environments

- `@babel/plugin-transform-runtime` and `@babel/runtime`. When a library is transpiled with Babel there are several helper functions and utilities that are included with the output. As you consume more packages these helpers are duplicated and increase the bundle size of your application. By including a runtime dependency to `@babel/runtime` this will ensure that our package doesn't duplicate them locally.

Let's create our Babel config at `.babelrc`.

```bash
touch .babelrc
```

```json
// File: .babelrc

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": ">0.2%, not dead, not op_mini all"
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "babel-plugin-styled-components"
  ]
}
```

If you want to see the browsers supported by our preset-env target, use: `>0.2%, not dead, not op_mini all`, like this:

```bash
npx browserslist ">0.2%, not dead, not op_mini all"
```

## RollupJS

To configure our module bundler install the following dependencies:

```bash
npm install --save-dev rollup rollup-plugin-delete rollup-plugin-node-externals @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve
```

Next, create a new configuration file, `rollup.config.js`, with the following content:

```js
// File: rollup.config.js

/* eslint-env node */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import externals from 'rollup-plugin-node-externals';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default [
  {
    input: './src/index.ts',
    plugins: [
      del({ targets: 'dist/*' }),
      externals({ deps: true }),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
```

Rollup configurations have three common sections: `input`, `output`, and `plugins`.

### Input

The `input` section references the entry-point that we defined above. This determines what modules will be bundled in our output.

### Output

`output` defines where the bundled and transpiled output will be placed when the build is complete. It also receives a `format` configuration which determines the module format. By providing an array of outputs we can create a multi-distribution build which includes ESModule and CommonJS output types.

The output file paths are determined by the `main` and `module` entry-points within our `package.json`.

### Plugins

The plugins are what allow Rollup to understand our code and bundle it correctly.

- `del`
  - Deletes any existing build files that exist.
- `externals`
  - Ensures that any dependencies we rely on are not bundled within our library.
  - This allows common dependencies to be de-duped with other packages, reducing bundle size.
- `nodeResolve`
  - Allows Rollup to find third party modules in `node_modules`
- `commonjs`
  - Converts CommonJS modules into ESModules within Rollup
- `babel`
  - Uses our Babel config defined earlier to transpile our code into a format that is consumable by a wider set of browsers.

## Package scripts

To build our library we must update our package entry-points and `scripts` within `package.json`:

```json
// File: package.json
{
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "sideEffects": false,
  "scripts": {
    "build": "npm run build:js",
    "build:js": "rollup -c rollup.config.js",
    "test": "npm run test:ts && npm run test:jest",
    "test:jest": "jest",
    "test:ts": "tsc",
    "lint": "npm run lint:format && npm run lint:js",
    "lint:format": "prettier --check \"src/**/*\"",
    "lint:js": "eslint src/**",
    "format": "prettier --write \"src/**/*\"",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
}
```

The `main` and `module` values inform Rollup where to place our build output. Along with the `sideEffects` value they also inform other module bundlers how to consume our package.

The `build` and `build:js` scripts allow us to build our library for the first time. Run the `build` script.

```bash
npm run build
```

You will see our build output in the `dist` folder.

## Next lesson

Next we will be including TypeScript declarations in our build.
