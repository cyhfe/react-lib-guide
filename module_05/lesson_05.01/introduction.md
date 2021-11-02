---
title: Introduction and tooling
privateVideoUrl: https://fullstack.wistia.com/medias/vzwijon31m
---

Testing a component library is similar to application testing. Our tests should resemble how consumers will actually use our library. Testing is a complex topic that deserves its own course and we will just be scratching the surface.  In this module we will be setting up a basic testing environment using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [ts-jest](https://kulshekhar.github.io/ts-jest/).

React Testing Library has several [guiding principles](https://testing-library.com/docs/guiding-principles) that help ensure that your tests are as flexible and accurate as possible. `ts-jest` is a TypeScript pre-processor that ensures Jest is able to consume and type-check our tests.

## ts-jest configuration

Since `ts-jest` is a pre-processor for Jest, the setup is similar to a non-TypeScript codebase. To start, we will add `jest` and `ts-jest`.

```bash
npm install --save-dev jest@26 ts-jest@26 @types/jest@26
```

Next we add a Jest configuration that uses `ts-jest` as a preset. Create a new `jest.config.js` file.

```bash
touch jest.config.js
```

```js
// File: jest.config.js
/* eslint-env node */

module.exports = {
  preset: 'ts-jest'
};
```

Jest is now configured to consume any TypeScript tests we write. We can update our `test` script in the `package.json` file to use Jest.

```json
// File: package.json

{
 "scripts": {
    "test": "jest"
  }
}
```

## React Testing Library

We will be installing React Testing Library with an additional utility package, [jest-dom](https://github.com/testing-library/jest-dom). `jest-dom` provides custom matchers that allow us to write assertions in a clear and reliable way. Add the dependencies:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

To make the custom Jest matchers available in our tests we need to create a new `jest-setup.ts` file that imports `jest-dom`:

```bash
touch jest-setup.ts
```

```ts
// File: jest-setup.ts

import '@testing-library/jest-dom';
```

We then reference this file in our `jest.config.js` and `tsconfig.json` files to make them available.

```js
// File: jest.config.js

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
```

```json
// File: tsconfig.json

{
  "include": ["src/**/*", "./jest-setup.ts"]
}
```

## Commit changes

Save our progress by creating a new commit.

```bash
git add -A
git commit -m "Add test infrastructure"
```

## Next lesson

Next we will create a test suite for our `Button` component.
