---
title: Syllabus
description: Syllabus and course overview.
role: "INTRODUCTION"
privateVideoUrl: https://fullstack.wistia.com/medias/8gkwhqa0qy
isPublicLesson: true
---

This is a self-paced course that will teach you the skills necessary to build a private component library with React and TypeScript. We will cover the core aspects of planning, building, testing, and deploying a private component library.

## Technologies

### React

[React](https://reactjs.org/) is a component-based framework for creating interactive UIs. We will be using React to share our components between codebases.

### TypeScript

[TypeScript](https://www.typescriptlang.org/) is an extension of JavaScript which allows optional static typing. It helps improve the developer experience for both library authors and consumers. We will be developing our library with TypeScript as well as providing [type declarations](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) for consuming codebases.

### Storybook

[Storybook](https://storybook.js.org/) will be the environment where we develop and document our components.

### React Testing Library

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is the testing framework used in this course. It allows us to write maintainable tests that ensure we are testing components in the same way that consumers will use them.

### Github Actions

[Github Actions](https://github.com/features/actions) will be our **Continuous Integration and Continuous Deployment (CI/CD)** platform. We will be using it to build, test, and deploy our code.

### Github Packages

Not all component libraries need to be available in the public NPM registry. Deploying a library to a private registry can often be a complex process. [Github Packages](https://github.com/features/packages) is a service that allows us to deploy and consume private NPM packages.

## Course content

### Module 1: Shared components

Often the hardest decision when starting a new component library is deciding which components should be shared. In this module we will:

- Learn how to identify potential shared components in an existing codebase
- Cover the basics of [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) and how to use it as a library author
- Identify which styling is component-specific and which is global
- Learn how to choose dependencies for our component library that are compatible with an existing codebase

### Module 2: Library creation

Learn how to create the initial scaffold of a component library with Storybook as our development environment. We will look at:

- Creating a new NPM package
- An overview of common component library package structures
- Adding Storybook as a development environment
- Integrating TypeScript, ESLint, Prettier, and other development tooling

### Module 3: Shared component patterns

Create a `Button` component that is flexible enough to be used within any codebase or implementation. We will cover:

- Creating a flexible Button component
- Introduction to common API patterns for shared components
- TypeScript-specific patterns for improved developer productivity
- How to allow flexible styling with CSS-in-JS and styled-components
- Best practices for documenting components in Storybook with live examples and prop sheets

### Module 4: Advanced patterns

Create advanced `Input` and `Textarea` components with accessibility features provided through React Context. We will:

- Create complex shared components including `Input` and `Textarea` fields
- Get an introduction to compound components and providing state with React Context
- Learn shared component patterns for compound components
- Create a custom React hook for accessible ID generation

### Module 5: Component testing

Learn how to create maintainable tests for our shared components using React Testing Library:

- Implement component tests with React Testing Library and Jest
- Learn some of the unique testing requirements for shared components

### Module 6: Build process

Create a build process for our component library that allows tree-shaking and other modern benefits. This will include:

- Introduction to common build practices for NPM packages
- Implementing a build process with RollupJS and Babel
- Producing CommonJS and ESModule bundles for consumers
- Generating shared TypeScript definitions

### Module 7: Deployment & automation

Setup a CI and CD workflow with Github Actions to deploy our component library to a private NPM registry. We will learn how to:

- Create a Github Action that can lint, test, and build our library
- Create new versions of our library
- Deploy to our private NPM registry using Github Packages
- Integrate our private component library into an existing codebase
