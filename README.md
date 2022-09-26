# PF Nuxt App

This project **requires** the exact Node version **v16.13.0 LTS** which, at the time of writing, includes NPM v8.1.0.

test deployment release 01

## Project setup

1. Create a .env file at the root of the project on your local
   environment.
2. Copy/Paste the content of the .example-env file into it.
3. Reach out to team leads for missing "REPLACE_ME" values (TBD this may be updated to a reference link in Notion).

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
npm install
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Additional Guidance

### Configuration files

Do not make changes to configuration files (`package.json`, .`eslintrc.js`, `.gitignore` etc) without an approved request and explanation for the changes.

**PRs with changes to these files should be declined** unless you are certain (as the reviewer) that the change was requested and approved.

### Setup

- Duplicate the .example-env to a file called .env at the project root.

### Git Branching and Pull Requests

- Your branches should always be created off of `develop`, and follow the naming convention: `### TBD after Rally training ###`
- Each PR requires two reviews. You can't review your own PR. You must merge your own PR, when approved and ready. Do not merge other developers' pull requests.

### Vue Components

- All base components should default to 100% width. Presentation will be controlled within the Bootstrap grid
- All components should use the VName naming convention (ie. `VRadioButton.vue`, `VCard.vue`)

### Styles and Bootstrap

- All styles should live within the `src/assets/sass` directory.
- All font sizes, margins, and padding should be defined in rems. Do not use pixel (px values).
- Do not use styles or scoped styles within components - there may be rare exceptions but implementation reasoning must be discussed/approved first.
- **DO NOT USE BOOTSTRAP HELPER CLASSES FOR MARGIN, PADDING, FLEX** etc (ie `mb-3`, `my-2`, `d-flex` etc). Unless discussed and approved first.
- Bootstrap component styles should be modified first via the `_variables.scss` file. Only add custom styles where variables don't already exist to provide the necessary modification. We are trying to keep this as theme-able and flexible/future proof as possible.
- TBD
