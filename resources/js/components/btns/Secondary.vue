<template>
  <button>
    <span class="iconify" :data-icon="icon"></span>
    {{ text }}
  </button>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            default: "Danger Button"
        },
        icon: {
            type: String,
            default: " "
        }
    }
}
</script>

<style lang="less" scoped>
button {
    @apply font-primary bg-white border border-[#E2E5ED] rounded-full px-4 py-2 w-fit text-[#637C8E] text-xs lg:text-sm inline-flex gap-x-1 items-center transition ease-linear duration-150 whitespace-nowrap;
    &:hover {
      @apply outline outline-1 outline-[#E2E5ED] text-white bg-[#E2E5ED];
    }
    .iconify {
        @apply inline-block text-2xl;
    }
}
</style>