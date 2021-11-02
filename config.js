module.exports = ({ dedent }) => ({
  title: "The newline Guide to Building a Company Component Library",
  slug: "newline-guide-to-building-a-company-component-library",
  permalink: "/courses/newline-guide-to-building-a-company-component-library",
  // posterImageUrl: "./images/tinyhouse-video-banner.png",
  // heroVideoUrl: "https://fullstack.wistia.com/medias/huan3dtzrj",
  gitRepoHttpUrl:
    "https://gitlab.com/fullstackio/books/guide-to-building-a-company-component-library",
  publicLessonCount: 0,
  previewPercent: 40,
  modulePrefix: "module_",
  lessonDirsGlob: "module_*/lesson_*",
  moduleDirsGlob: "module_*",
  authorSlugs: ["austingreendev"],
  isFree: false,
  isShownPublicly: true,
  previewPagesOnSite: true,
  useDeltas: true,
  heroVideoUrl: "https://fullstack.wistia.com/medias/heoju6oszo",
  posterImageUrl: "./images/twitter.jpg",
  ogImageUrl: "./images/twitter.jpg",
  twitterPromoImageUrl: "./images/twitter.jpg",
  // heroPhotoUrl: "./path/to/file.jpg",
  // heroLogoUrl: "./path/to/logo.jpg"
  /* INSTRUCTIONS: Read the template below, write your own version, and then delete this comment (and the extra text) */
  summary: dedent(`
  This course will teach you how to create a flexible, private, enterprise-grade
  component library using React.
  `),
  whatYouWillLearn: {
    items: [
      {
        text: "How to identify potential shared components in an existing codebase"
      },
      { text: "Importance of choosing your libraries dependencies" },
      {
        text: "How to create an NPM library from scratch with TypeScript and Storybook"
      },
      { text: "Basic and advanced API patterns for shared components" },
      {
        text: "How to build and deploy a modern NPM package to a private NPM registry"
      }
    ]
  },
  primaryDescriptionMarkdown: dedent(`
  This course will teach you how to create a flexible, private, enterprise-grade component library using React.

  Since its introduction in 2013, React has become one of the [most used front-end frameworks](https://2019.stateofjs.com/front-end-frameworks/). Its component-based architecture and flexibility has made it the framework of choice for those needing to share code across multiple teams.

  However, the same flexibility that has helped React grow in popularity also creates many challenges when creating shared assets and tooling. Some of the most commonly asked questions include:

  - What components should be shared?
  - How do I choose which dependencies to include in my library?
  - Which component APIs and design patterns allow for the most flexibility?
  - How do I document and build my components?
  - How should I be testing my library?
  - Where do I deploy my components for internal use?
  `),
  numProjects: 1,
  linesOfCode: 1035,

  products: {
    "newline-guide-to-building-a-company-component-library": {
      slug: "newline-guide-to-building-a-company-component-library",
      name: "The newline Guide to Building a Company Component Library",
      title: "The newline Guide to Building a Company Component Library",
      description:
        "The newline Guide to Building a Company Component Library video course",
      regularPrice: 4900,
      salePrice: 3900,
      isFree: false,
      isOnSale: true,
      isForSale: true,
      purchaseSuccessUrl:
        "/courses/newline-guide-to-building-a-company-component-library/welcome",
      studentSuccessUrl:
        "/courses/newline-guide-to-building-a-company-component-library/welcome",
      infuPurchaseTags:
        "customer,newline-guide-to-building-a-company-component-library-purchased,react",
      ctaFeatures: {
        features: [
          { text: "Learn about shared component API patterns" },
          { text: "Build a private component library" },
          { text: "Integrate our library with GitHub Actions and Registry" }
        ]
      }
    }
  },
  authorBios: {
    austingreendev: dedent(`
    My name is Austin Green and I'm a software engineer focused on creating the best shared developer experiences. I come from a full-stack background, but have been focusing on shared front-end components and tooling since 2016.
`)
  },
  faq: [
    {
      q: "Who is this course for?",
      a: "Anyone with a basic understanding of React and front-end development including HTML, CSS, and JavaScript."
    },
    {
      q: "What if I need help?",
      a: "You can ask us questions anytime through the community Discord channel or by [sending us a message](mailto:us@fullstack.io)."
    }
  ]
});
