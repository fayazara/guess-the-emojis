# Guess the emojis

A simple game where you have to guess the emoji based on the image mashup. Images picked from Google emoji kitchen.

Live: https://guess-the-emojis.pages.dev/

## How to play

Just guess the emojis you think the image is made up of.

## How to contribute.

Add the image in `/public/emojis/` folder and the name and the correct answers in `/content/emojis.js` file. Have a look at the file and you will get the idea.

## Running it locally

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
