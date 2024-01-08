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
    @apply font-primary bg-[#0DABD8] rounded-full w-fit px-4 py-2 text-white text-xs lg:text-sm block gap-x-1 items-center transition ease-linear duration-150 whitespace-nowrap;
    &:hover {
      @apply outline outline-1 outline-[#0DABD8] text-[#0DABD8] bg-white;
    }
    .iconify {
        @apply inline-block text-2xl;
    }
}
</style>