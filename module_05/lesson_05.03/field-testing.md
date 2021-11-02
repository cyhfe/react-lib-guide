---
title: Field testing
privateVideoUrl: https://fullstack.wistia.com/medias/2rcwqq36wj
---

For our `Field` we will be testing each compound component to ensure that it applies the correct accessibility attributes.

## Create `Field` tests

First we need to create `Field.spec.tsx` with the following content:

```bash
touch src/fields/Field.spec.tsx
```

```tsx
// File: src/fields/Field.spec.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field } from './Field';

describe('Field', () => {
  describe('Label', () => {
    it('applies unique ID to htmlFor attribute', () => {});
  });

  describe('Input', () => {
    it('applies unique ID to id attribute', () => {});
  });

  describe('TextArea', () => {
    it('applies unique ID to id attribute', () => {});
  });
});
```

If Jest is no longer running, start it in `--watch` mode.

```bash
npm run test -- --watch
```

## Mocking custom hooks

Our first test is asserting that a `Field.Label` component receives a unique ID applied as a `for` attribute. If we were to implement a test now, every render of the component would create a unique result for that ID. Let's test that by adding the following:

```tsx
it('applies unique ID to htmlFor attribute', () => {
  render(
    <Field>
      <Field.Label>Label</Field.Label>
    </Field>
  );

  screen.debug();
});
```

`screen.debug()` is a utility that will display the current DOM structure of the rendered test. Every time we save the test you can see the unique `for` value change. To help make our tests more predictable we will be creating a [manual mock](https://jestjs.io/docs/manual-mocks) for the `useUniqueID` utility.

To create a mock for the utility we need to create a new `__mocks__` directory and provide a new implementation.

```bash
mkdir src/utils/__mocks__
touch src/utils/__mocks__/useUniqueID.ts
```

```tsx
// File: src/utils/__mocks__/useUniqueID.ts

export const useUniqueID = (): string => 'unique-id';
```

This mock will always return `unique-id` for each request. Now we can enable the mock by calling `jest.mock()` within `Field.spec.tsx`. You should now see `unique-id` displayed as the `for` element in your log output.

```tsx
// File: src/fields/Field.spec.tsx

jest.mock('../utils/useUniqueID');
```

We can now update our test to assert that the `for` attribute receives the correct value.

```tsx
it('applies unique ID to htmlFor attribute', () => {
  render(
    <Field>
      <Field.Label>Label</Field.Label>
    </Field>
  );

  expect(screen.getByText('Label')).toHaveAttribute('for', 'unique-id');
});
```

## `Input` and `Textarea` tests

For both the `Input` and `Textarea` components we are able to use the `getByLabelText()` query to retrieve the DOM elements. We assert that the elements will have the correct `id` attributes provided.

```tsx
describe('Input', () => {
  it('applies unique ID to id attribute', () => {
    render(
      <Field>
        <Field.Label>Input</Field.Label>
        <Field.Input />
      </Field>
    );

    expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'unique-id');
  });
});

describe('TextArea', () => {
  it('applies unique ID to id attribute', () => {
    render(
      <Field>
        <Field.Label>Textarea</Field.Label>
        <Field.Textarea />
      </Field>
    );

    expect(screen.getByLabelText('Textarea')).toHaveAttribute(
      'id',
      'unique-id'
    );
  });
});
```

## Commit changes

If all tests are passing, save our progress by creating a new commit.

```bash
git add -A
git commit -m "Add component testing"
```

## Next module

In the upcoming module we will be learning how to create a tree-shakeable build process with RollupJS.
