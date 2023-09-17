const META_TITLE = 'GuessMoji - Guess the Emoji Kitchen';
const META_DESC = 'Guess the emoji combinations from Emoji Kitchen. A guessing game with emoji mashups.';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: META_TITLE,
      meta: [
        {
          hid: "description",
          name: "description",
          content: META_DESC,
        },
        {
          hid: "msapplication-TileColor",
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff",
        },
        { hid: "og:title", property: "og:title", content: META_TITLE },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://guess-the-emojis.pages.dev/og_me.png",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: META_DESC,
        },
        { hid: "twitter:title", name: "twitter:title", content: META_TITLE },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: META_DESC,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
  },
});
