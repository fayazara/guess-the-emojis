<template>
  <div class="py-12 space-y-5">
    <h1 class="text-2xl font-bold text-center">😬 + 🥲 Guess the emojis</h1>
    <div
      class="aspect-[1/1] relative border rounded-2xl p-1 bg-white shadow-sm h-full w-full"
    >
      <img
        :src="currentEmoji.image"
        :alt="currentEmoji.mixture"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="flex items-center gap-2">
      <UInput class="w-full" size="lg" v-model="option_1" />
      <span class="text-xl font-bold">+</span>
      <UInput class="w-full" size="lg" v-model="option_2" />
    </div>
    <UButton @click="check" block label="Guess" color="black" size="lg" />
    <div class="flex items-center justify-center">
      <UButton
        label="Skip"
        variant="ghost"
        color="gray"
        size="lg"
        @click="currentIndex++"
      />
    </div>
    <div class="text-center text-sm text-gray-500">
      <p>
        Made by
        <a class="underline" href="https://twitter.com/fayazara">Fayaz</a>.
        Source code
        <a class="underline" href="https://github.com/fayazara/guess-the-emojis"
          >here.</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import confetti from "canvas-confetti";
import emojis from "@/content/emojis";
const option_1 = ref("");
const option_2 = ref("");
const currentIndex = ref(0);

const currentEmoji = computed(() => {
  return emojis[currentIndex.value];
});

const check = () => {
  const guess = option_1.value + option_2.value;
  const reversedGuess = option_2.value + option_1.value;

  if (
    guess === emojis[currentIndex.value].mixture ||
    reversedGuess === emojis[currentIndex.value].mixture
  ) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    option_1.value = "";
    option_2.value = "";
    if (currentIndex.value < emojis.length - 1) {
      currentIndex.value++;
    } else {
      alert("You have guessed all the emojis!");
    }
  } else {
    alert("Oops! Wrong guess. Try again!");
  }
};
</script>
