<template>
  <div class="relative">
    <div class="flex flex-wrap lg:justify-between lg:flew-nowrap">
      <h2 :class="titleClass" v-text="title" />
      <slot name="button" />
    </div>
    <div :class="bubbleClass" />
    <div :class="dotsClass">
      <div v-for="i in 15" class="w-3 h-3 rounded-full bg-purple-200"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textSide: {
      type: String,
      default() {
        return 'left'
      }
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    const defaultTitleClasses = 'relative text-2xl lg:text-5xl font-bold z-20';
    const rightTitlePositionClasses = defaultTitleClasses + ' text-right ml-auto';

    const defaultBubbleClasses =
      'absolute -top-16 w-40 h-40 bg-purple-200 rounded-full ';
    const rightBubbleClasses = '-right-16';
    const leftBubbleClasses = '-left-16';
    const bubbleClass =
      this.textSide === 'right'
        ? defaultBubbleClasses + rightBubbleClasses
        : defaultBubbleClasses + leftBubbleClasses;

    const dotsDefaultClass =
      'absolute flex justify-between top-9 md:top-5 w-96 ';

    return {
      titleClass:
        this.textSide === 'right'
          ? rightTitlePositionClasses
          : defaultTitleClasses,

      bubbleClass: bubbleClass,

      dotsClass:
        this.textSide === 'right'
          ? dotsDefaultClass + '-left-60'
          : dotsDefaultClass + '-right-60',
    };
  },
};
</script>
