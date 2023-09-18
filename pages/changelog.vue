<template>
  <div class="py-4 space-y-5">
    <h1 class="text-2xl dark:text-gray-200">Changelog</h1>
    <section v-for="(item, index) in changelog" :key="index">
      <h2 class="text-gray-500 flex items-center justify-between dark:text-gray-300 leading-6 text-xs pl-8 m-0">
        <span>v{{ item.version }}</span>
        <span>🗓️ {{ item.date }}</span>
      </h2>
      <div class="pl-8 pb-12 relative">
        <div
          class="absolute bottom-0 left-0 w-px bg-slate-200 dark:bg-slate-500 -top-3"
        ></div>
        <div
          class="bg-white border-slate-300 border-2 rounded-full w-[0.5625rem] h-[0.5625rem] -left-1 -top-[1.0625rem] absolute"
        ></div>
        <div
          class="max-w-none prose-h3:mb-4 prose-p:dark:text-gray-400 dark:prose-invert prose-h3:text-gray-700 prose-h3:dark:text-gray-300 prose-h3:text-base prose-h3:leading-6 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600"
        >
          <h3>{{ item.title }}</h3>
          <div v-html="item.description"></div>
          <div class="flex justify-between items-center mt-2">
            <span class="font-semibold dark:text-gray-400 text-gray-600" v-html="item.author"></span>
            <span
              class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 ring-1 ring-inset ring-opacity-25 dark:ring-opacity-25"
              :class="item.class"
              >🏷️ {{ item.tag }}</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const changelog = [
{
    title: "⭐ GuessMoji - Rebranded name",
    description:
      `<ul>
        <li>Renamed the game as <b>GuessMoji</b>.</li>
        <li>Added a new logo.</li>
        <li>Added changelog page.</li>
        <li>Added alert messages for successful guess and failure.</li>
        <li>Fixed error when user clicks skip and reaches end of emojis.</li>
        </ul>
      `,
    tag: "Rebranding",
    class: "feat",
    version: "2.0.0",
    date: "Sep 18, 2023",
    author: "✍🏻 <a href='https://twitter.com/akshara_dev' target='_blank'>Akshara Hegde</a>",
  },
  {
    title: "🚀 Initial kickoff",
    description:
      "A guessing game with emoji mashups based on google's emoji kitchen.",
    tag: "Launch",
    class: "feat",
    version: "1.0.0",
    date: "Sep 17, 2023",
    author: "✍🏻 <a href='https://twitter.com/fayazara' target='_blank'>Fayaz Ahmed</a>",
  },
];
</script>
<style scoped>
.bug {
  @apply bg-red-50 dark:bg-red-400 dark:bg-opacity-10 text-red-500 dark:text-red-400 ring-red-500 dark:ring-red-400;
}
.feat {
  @apply bg-green-50 dark:bg-green-400 dark:bg-opacity-10 text-green-500 dark:text-green-400 ring-green-500 dark:ring-green-400;
}
</style>
