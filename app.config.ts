export default defineAppConfig({
  ui: {
    primary: "sky",
    gray: "slate",
    formGroup: {
      help: "text-xs mt-1 text-gray-500 dark:text-gray-400",
      error: "text-xs mt-1 text-red-500 dark:text-red-400",
      label: {
        base: "text-sm block font-medium text-gray-700 dark:text-gray-200",
      },
    },
    button: {
      rounded: "rounded-lg transition-transform active:scale-[0.98]",
    },
    modal: {
      overlay: {
        background: "bg-[rgba(0,8,47,.275)] saturate-50",
      },
    },
    container: {
      constrained: "max-w-md",
    },
  },
});
