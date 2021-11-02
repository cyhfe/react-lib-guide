---
title: Compound components
privateVideoUrl: https://fullstack.wistia.com/medias/g5d42syhj1
---

The patterns used in the previous module work well for simple, standalone elements. But, once you start creating patterns that share state between components, additional logic is required.

In this module we will create a collection of form controls as [compound components](https://kentcdodds.com/blog/compound-components-with-react-hooks). These components will have a shared [React Context](https://reactjs.org/docs/context.html) provider that stores an auto-generated ID for accessibility.

## API design

Compound components are a useful design pattern because they increase the flexibility of a component. Let's look at a traditional component API for a form field.

Fields often have two DOM elements, `label` and `input`. These fields share a common ID which requires us to abstract the elements to a single component.

```tsx
// Traditional component API
<FormField label="Standard API" placeholder="Hello" id="unique-id" />

// Renders this
<label htmlFor="unique-id">Standard API</label>
<input id="unique-id" placeholder="Hello" />
```

This API helps ensure a common layout, but can lead to flexibility issues in the future. Without providing separate components for each DOM element, consumers are unable to change the order of elements or style them individually. It also makes it difficult to provide consistent props for each element; would an `onClick` event be for the `label` or `input` element?

Providing separate components for each element allows consumers to reorder, style, and apply props as needed. These compound components are able to use all of the shared API patterns that were covered in the previous module:

- Children pass-through
- JSX prop-spreading
- React `forwardRef` API

```tsx
<Field> // Generates our unique ID
  <Field.Label>Compound API</Field.Label>  // Renders a label with `htmlFor` attribute
  <Field.Input placeholder="Hello" />  // Renders an input with `id` attribute
</Field>
```

## React Context

Both the label and input need access to a uniquely generated ID value to provide an accessible experience. This shared state can be provided using the Context API.

When rendered, the `Field` component will generate a unique ID value and store it in state. It will then use a [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) to share the value with any consumers. In our `Label` and `Input` components we will retrieve this value and apply it to the correct attributes.

## Common utilities

Generating a unique ID could become a common action throughout our component library. We will be creating a custom utility hook that can be shared with other components in the future.

## Next lesson

In the next lesson we'll be creating a new collection of `Field` components and utilities which use the compound component pattern.
