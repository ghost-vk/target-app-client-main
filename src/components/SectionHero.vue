<template>
  <div
    class="
      flex flex-col
      text-gray-100
      min-h-screen
      py-24
      justify-center
      bg-cover bg-no-repeat bg-center
    "
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import bgImage from '@/assets/img/head-bg.svg';

export default {
  data() {
    return {
      bgImage: bgImage,
    };
  },
};
</script>
