<template>
  <div
    class="text-center flex flex-wrap justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-500 py-4"
  >
    <div class="flex flex-col gap-2 justify-start items-start">
      <div>
        Enhancement by
        <a
          class="underline hover:text-gray-300"
          href="https://twitter.com/aksharahegde"
          >Akshara Hegde</a
        >
      </div>
      <div>
        Originally created by
        <a
          class="underline hover:text-gray-300"
          href="https://twitter.com/fayazara"
          >Fayaz</a
        >
      </div>
    </div>
    <nuxt-link to="/changelog" class="hover:text-gray-300 hover:underline"
      >Changelog</nuxt-link
    >
    <div>
      <a
        class="hover:underline hover:text-gray-300"
        href="https://github.com/aksharahegde/guess-the-emojis"
        >Source code</a
      >
    </div>
  </div>
</template>
