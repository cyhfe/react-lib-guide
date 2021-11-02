---
title: Button API
privateVideoUrl: https://fullstack.wistia.com/medias/2qw6xlqgee
---

In this lesson we'll be improving the API of the original `Button` component we created. Buttons are stateless and are one of the most common patterns on the web which makes them a great showcase for common shared component patterns.

In this lesson we will be covering API patterns that are applicable to all shared components. These include:

- JSX children pass-through
- React `fowardRef` API
- JSX prop-spreading with TypeScript
- Opinionated prop defaults

## JSX children pass-through

A core concept of React is the ability to compose elements using the [`children` prop](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx). Shared component design leans heavily on this concept.

Allowing consumers to provide `children` whenever possible makes it easier for them to provide custom content and other components. It also helps align component APIs with those of native elements.

Let's allow our `Button` component to render its `children`:

```tsx
// File: src/Button.tsx

export const Button: React.FC = ({ children }) => {
  return <button>{children}</button>;
};
```

The `React.FC` definition already includes `children` as a valid prop. We can pass it directly to the native `button` element. Next, let's update our Storybook documentation to supply content to the `Button`:

```tsx
// File: src/stories/Button.stories.tsx

const Template: Story = (args) => <Button {...args}>my button component</Button>;
```

## `forwardRef` API

Many components have a one-to-one mapping to an HTML element. To allow consumers access to that underlying element we can provide a `ref` prop using the [`React.forwardRef()` API](https://reactjs.org/docs/forwarding-refs.html).

Providing a `ref` isn't something that is necessary for day-to-day React development, but it can be very useful within shared component libraries. It allows for advanced functionality, like positioning a tooltip relative to our `Button` with a [positioning library](https://popper.js.org/).

Our `Button` component provides a single `HTMLButtonElement` (`<button>`), which we can provide a reference to with `forwardRef()`.

```tsx
// File: src/buttons/Button.tsx

export const Button = React.forwardRef<HTMLButtonElement>(
  ({ children }, ref) => {
    return <button ref={ref}>{children}</button>;
  }
);

Button.displayName = 'Button';
```

To help TypeScript consumers understand what element is returned from the `ref` prop, we must provide a type variable that represents the element we're passing it to - `HTMLButtonElement` in this case.

## JSX prop-spreading

Another pattern that increases the flexibility of components is [JSX prop-spreading](https://reactpatterns.com/#jsx-spread-attributes). Prop-spreading allows consumers to treat our shared components as drop-in replacements for their native counterparts during development.

Prop-spreading can help with the following scenarios:

Provide accessibility props for certain content
- `<Button aria-label="Accessibility text">{/* icon */}</Button>`

Add custom data attributes for automated testing
- `<Button data-testid="checkout-button">Checkout</Button>`

Use a native event that isn't defined in our props
- `<Button onMouseMove={() => {}}>Events</Button>`

Without prop-spreading, each of the scenarios above would require explicit props to be defined. This leads to what I call _**prop-sheets of doom**_. It can be common to see components with prop-sheets that include hundreds of individual props, most of which duplicate native functionality or are only relevant to a few specific implementations of the component.

Prop-spreading helps ensure that our shared components stay as flexible as the native elements that they use internally. Let's add prop-spreading to our `Button` component:

```tsx
// File: src/buttons/Button.tsx

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});
```

We can reference our remaining props with the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and apply them to the button. `React.ComponentPropsWithoutRef` is a type utility that helps document the valid props for a `<button>` element to our TypeScript consumers. Some examples of this type-checking in action:

```tsx
// Pass - e is typed as `React.MouseEvent<HTMLButtonElement, MouseEvent>`
<Button onClick={(e) => { console.log(e) }} />

// Pass - aria-label is typed as `string | undefined`
<Button aria-label="My button" />

// Fail - type "input" is not assignable to `"button" | "submit" | "reset" | undefined`
<Button type="input" />
```

## Opinionated defaults

For certain components you may find the need to default attributes to specific values. Whether it's to reduce bugs or improve the developer experience, providing an opinionated set of defaults is often specific to an organization or team. If you do find the need to default certain props you should ensure that it is still possible for consumers to override those values if needed.

A common complexity found with `button` elements is the [default type value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type), `"submit"`. This default `type` often submits surrounding forms accidentally and can lead to difficult debugging scenarios. For our component library we want to default the attribute to `"button"`.

Update the `Button` component to return:

```tsx
// File: src/buttons/Button.tsx

return (
  <button ref={ref} type="button" {...props}>
    {children}
  </button>
);
```

By placing defaulted props _before_ the prop-spreading we can ensure that any value provided by consumers takes priority.

## Commit changes

Save our progress by creating a new commit.

```bash
git add -A
git commit -m "Update Button API"
```

## Next lesson

In the next lesson we will learn how to add add style variants to the `Button` component using `styled-components`.
