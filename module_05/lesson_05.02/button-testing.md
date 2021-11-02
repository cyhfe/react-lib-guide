---
title: Button testing
privateVideoUrl: https://fullstack.wistia.com/medias/rs8pnhptdu
---

Even though our `Button` component has a simple API, there are several features that we can test. Some possible test-cases include making sure that the component:

- Defaults the `type` attribute to `button`
- Allows consumers to override the default `type`
- Allows all valid props to be spread onto the `button` element

In this course we will avoid testing the individual styles of our components. These types of tests can become rigid and hard to maintain over time. Without rendering these components in a real browser and visually checking the styles we are unable to assert that the styling is correct. There are several testing methodologies and tools, like [snapshot testing](https://jestjs.io/docs/snapshot-testing) and [component image snapshots](https://github.com/americanexpress/jest-image-snapshot), that will help with style assertions, if that is something that you would like to pursue.

## Creating our tests

To create our `Button` tests let's create a new spec file, `Button.spec.tsx`, with the following content:

```bash
touch src/buttons/Button.spec.tsx
```

```tsx
// File: src/buttons/Button.spec.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applies default type of button', () => {});

  it('applies specific type if provided', () => {});

  it('applies valid attribute to element', () => {});
});
```

This file includes tests for the three features that we want to ensure are working correctly. Start `jest` in watch mode to ensure that our tests are working as intended.

```bash
npm run test -- --watch
```

### Default type

Our first test will render a simple `Button` implementation. We will create an assertion that ensures the `type` attribute is equal to `button`.

```tsx
it('applies default type of button', () => {
  render(<Button>hello</Button>);

  expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
});
```

We will use React Testing Library's `render()` method to render our component. Once the component is rendered we are able to retrieve the underlying `button` element using the `getByRole()` utility method. There are a variety of [queries](https://testing-library.com/docs/queries/about) that we can use for retrieving elements. They are designed to make our tests as flexible and semantically correct as possible.

The `toHaveAttribute` Jest matcher is provided by `jest-dom` and allows us to assert that `type` attribute is equal to `button`.

### User-provided type

The next test shows that it is possible for consumers to override this default behavior. It will be similar to the first implementation, but we will include an explicit `type="submit"` prop and assert that the matching DOM attribute matches that same value.

```tsx
it('applies specific type if provided', () => {
  render(<Button type="submit">hello</Button>);

  expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
});
```

### Custom props

The final test ensures that any other props are spread onto the `button` element as attributes. We will use a valid `aria-label` prop to test this.

```tsx
it('applies valid attribute to element', () => {
  render(<Button aria-label="Test">Hello</Button>);

  expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
});
```

We've now tested the non-styling functionality of our `Button` component.

## Next lesson

In the upcoming lesson we will create a new test suite for our `Field` components.
