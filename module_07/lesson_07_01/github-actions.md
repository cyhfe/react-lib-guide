---
title: Continuous integration with Github Actions
privateVideoUrl: https://fullstack.wistia.com/medias/yvua74wgb1
---

Now that our component library is building we have to find a secure way to publish our package. It's possible to lint, test, and publish our package locally, but this can be difficult to enforce with larger teams. In this module we will be automating our publish process in a CI/CD environment.

Since we are storing our repository within GitHub we will be using [GitHub Actions](https://github.com/features/actions) as the CI/CD environment and [GitHub Packages](https://github.com/features/packages) as our private NPM registry. Both services have a generous free tier for open-source software as well as monthly credits for private packages. Everything we do in this module will stay within the limits of the free tier.

## GitHub Actions configuration

GitHub Actions runs workflows based on repository events. For our publish workflow we will only want to run if a new NPM version has been tagged in git (`v1`, `v2`, etc.).

To enable this workflow create a new file at `.github/workflows/publish.yml`.

```bash
mkdir -p .github/workflows
touch .github/workflows/publish.yml
```

```yml
# File: .github/workflows/publish.yml

name: Publish

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: '16.x'
        registry-url: 'https://npm.pkg.github.com'
        scope: '@GITHUBUSERNAME'
    - run: npm ci
    - run: npm run lint
    - run: npm run test
    - run: npm run build
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This `Publish` workflow will run whenever a new tag is pushed that matches the `v*` format. It will:

- Checkout our code
- Setup the latest Node v15 release
- Configure NPM to use the Github Packages registry
- Use `npm ci` to ensure consistent dependencies are installed
- Lint, test, and build our library
- Publish our package to the Github Packages registry

Because Github Actions and Packages are aware of the security model, the `GITHUB_TOKEN` secret will properly authenticate us.

**IMPORTANT:** Ensure that `scope: '@GITHUBUSERNAME'` is updated to match your GitHub organization or account name. For my library this will be `scope: '@austingreendev'`.

## Commit changes

Save our progress by creating a new commit.

```bash
git add -A
git commit -m "Add publish GitHub Action"
```

Now push all of our local changes to the remote to create the action.

```bash
git push
```

## Next lesson

In the next lesson we will publish our component library to the private GitHub registry.
