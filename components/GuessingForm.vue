<template>
  <div
    class="aspect-[1/1] relative border dark:border-gray-600 rounded-2xl p-1 bg-white dark:bg-gray-800 shadow-sm h-full w-full"
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
  <UButton
    @click="check"
    block
    label="Guess"
    color="black"
    :disabled="!option_1 || !option_2"
    size="lg"
  />
  <UAlert
    v-if="showMessage"
    variant="solid"
    :icon="!isDone ? 'i-heroicons-exclamation-triangle' : 'i-heroicons-check'"
    :color="!isDone ? 'rose' : 'green'"
    :title="
      !isDone
        ? 'Oops! Wrong guess. Try again!'
        : 'Congratulations! You got all guesses right!'
    "
  />
  <div class="flex items-center justify-center">
    <UButton
      label="Skip"
      variant="ghost"
      color="gray"
      size="lg"
      @click="currentIndex++"
    />
  </div>
</template>
<script setup>
import confetti from "canvas-confetti";
import emojis from "@/content/emojis";
const option_1 = ref("");
const option_2 = ref("");
const currentIndex = ref(0);
const showMessage = ref(false);
const isDone = ref(false);

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
      isDone.value = true;
    }
  } else {
    isDone.value = false;
  }
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 3000);
};
</script>
