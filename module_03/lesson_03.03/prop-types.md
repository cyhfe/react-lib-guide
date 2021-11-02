---
title: Prop-types and TypeScript
privateVideoUrl: https://fullstack.wistia.com/medias/33pvoo01ih
---

When developing with TypeScript you will often see teams stop using [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for runtime prop validation. TypeScript does an excellent job of enforcing prop constraints for other TypeScript consumers, but our library may be consumed by both TypeScript and JavaScript codebases.

To ensure that all consumers have prop validation we will be including PropTypes for our components.

## Include prop-types

Let's install `prop-types` as a dependency.

```bash
npm install prop-types
```

We can add prop-type validation to our `Button` component with the following:

```tsx
// File: src/buttons/Button.tsx

import PropTypes from 'prop-types';

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};
```

These values infer their types from `ButtonProps`. This helps ensure that your prop-types stay up-to-date with those provided by TypeScript.

## Commit changes

Save our progress by creating a new commit.

```bash
git add -A
git commit -m "Add prop-types support"
```

## Next module

In the next module we will be creating more advanced shared components with the Compound Component pattern and React Context.
