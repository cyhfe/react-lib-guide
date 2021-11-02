---
title: TypeScript declarations
privateVideoUrl: https://fullstack.wistia.com/medias/r06wlriroj
---

Our current build process isn't taking full advantage of TypeScript. Even though our development process is now type-safe, that benefit isn't being passed onto our consumers. To provide the ability to use our TypeScript definitions in another codebase we will build them separately.

## Configuration

Our current `tsconfig.json` doesn't emit any code. It's purely for type-checking. Rather than customize the existing config, we can create a new one which extends its values.

Create a new `tsconfig.build.json` file with the following content:

```json
// File: tsconfig.build.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "dist/typings",
    "noEmit": false,
    "emitDeclarationOnly": true
  },
  "include": ["src/**/*"],
  "exclude": ["**/*.spec.*", "**/*.stories.*"]
}
```

This config extends our main `tsconfig.json` and updates our `compilerOptions` to export the type declarations to the `dist` folder. It also excludes any of our `*.spec.*` and `*.stories.*` files since those are not available to consumers.

## Package scripts

To make these types available we include a `types` value into our `package.json`. To produce the declaration during the build process we include a new `build:types` script which is run during the `build` script.

```json
// File: package.json
{
  "types": "dist/typings/index.d.ts",
  "scripts": {
    "build": "npm run build:js && npm run build:types",
    "build:types": "tsc -p tsconfig.build.json"
  },
}
```

Running the build command will now include our TypeScript declaration in the `dist/typings` folder.

```bash
npm run build
```

## Commit changes

Save our progress by creating a new commit.

```bash
git add -A
git commit -m "Add build tooling"
```

## Next module

In our last module we will be learning how to create a CI/CD pipeline for our component library with GitHub Actions and deploy our component to a private registry.
