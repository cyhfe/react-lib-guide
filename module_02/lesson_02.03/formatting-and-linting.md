---
title: Formatting and linting
privateVideoUrl: https://fullstack.wistia.com/medias/rz5b7n8jkb
---

Enforcing consistent patterns and syntax is an important part of maintaining a component library. Code linting tools help enforce consistent code formatting and ensure that important code-quality rules are being followed.

In this lesson we will be adding Prettier and ESLint to our codebase.

## Prettier

[Prettier](https://prettier.io/) is a code formatter with support for most types of files. It focuses on ensuring that our codebase follows consistent formatting rules, like max line length and consistent comma usage. Let's install it with the following command:

```bash
npm install --save-dev prettier
```

Prettier comes with an opinionated set of [default style rules](https://prettier.io/docs/en/options.html). For our library we will override the `singleQuote` configuration by creating a `.prettierrc` file at the root of the repository.

```json
// File: .prettierrc

{
  "singleQuote": true
}
```

Next, let's add a new NPM script to format our files. Modify our `package.json` to include a new `format` script:

```json
// File: package.json

{
  "scripts": {
    "format": "prettier --write .",
    "lint:format": "prettier --check ."
  }
}
```

Run the new script to format our codebase.

```bash
npm run format
```

## ESLint

[ESLint](https://eslint.org/) is a static analysis tool that allows us to ensure that our code follows specific code-quality rules. By including additional ESLint plugins we are able to reduce potential React and TypeScript bugs.

We will be using the following plugins in our library:

- `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` allow ESLint to parse and apply rules to TypeScript.

- `eslint-config-prettier`  disable all style rules that conflict with Prettier.

- `eslint-plugin-react` and `eslint-plugin-react-hooks` enable React-specific linting rules.

Install the following dependencies:

```bash
npm install --save-dev eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create a new `.eslintrc` file with the following configuration.

```json
// File: .eslintrc

{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/prop-types": 0
  }
}
```

Add a new NPM script to lint our files:

```json
// File: package.json

{
  "scripts": {
    "lint": "eslint src/**"
  }
}
```

If we run this new script you will notice that we have a warning in our `Button` component.

```bash
npm run lint

# Warning output:
~/Courses/component-library/src/buttons/Button.tsx
3:23  warning  Missing return type on function  @typescript-eslint/explicit-module-boundary-types
```

To resolve this warning we need to declare an explicit return type for our component:

```tsx
// File: src/buttons/Button.tsx

export const Button: React.FC = () => {
  return <button>Hello world</button>;
};
```

## Editor customization

Depending on your code editor, there may be integrations with these tools that significantly improve the developer experience. If you're using VS Code you may want to look into these add-ons:

- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) allows you to run Prettier for specific file types when saved.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) shows ESLint failures and potential fixes alongside your code.

## Commit changes

Save our progress by creating a new commit.

```bash
git add -A
git commit -m "Add Prettier and ESLint"
```

## Next lesson

In the next module we will learn common shared component patterns and styling solutions by create a `Button` component.
