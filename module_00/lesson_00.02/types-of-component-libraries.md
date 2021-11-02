---
title: Types of component libraries
description: The different types of component libraries and their uses.
role: "INTRODUCTION"
privateVideoUrl: https://fullstack.wistia.com/medias/qs5tmzfw28
isPublicLesson: true
---

The most common reason for implementing a component library is the need for consistency. By abstracting common business logic, styling, and features, you are able to provide a consistent experience for the end-users of your product as well as an improved developer experience for those building it. With the flexibility of React and the variety of library choices in the ecosystem there isn't a hard rule of what should be abstracted into a component library.

In this course we will be focusing on techniques and API patterns that allow for the widest range of uses. When building a new library, the trick is to make it flexible enough to support the use-cases and product needs you don't know about yet.

### Design systems

Design systems are a centralized collection of reusable UX patterns, style tokens, and voice and tone guidelines that are applicable to many different platforms. Whereas a component library is a collection of reusable abstractions for a specific experience. Component libraries are often confused for a complete design system.

> Not all component libraries are design systems and not all design systems have component libraries.

Some of the most popular open-source component libraries implement design systems:

- [material-ui](https://material-ui.com/) implements [Material Design System](https://material.io/design)
- [fluentui](https://github.com/microsoft/fluentui) implements [Fluent Design System ](https://www.microsoft.com/design/fluent/#/)
- [zendeskgarden/react](https://github.com/zendeskgarden/react-components) implements [Zendesk Garden Design System](https://garden.zendesk.com/)

The requirement for a design system to be flexible and unopinionated may not meet the use cases for your teams and the types of logic they need to share. The techniques shown in this course are applicable to design system components, but this isn't the main focus of the course.
