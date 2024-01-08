<template>
  <div class="mt-4 p-6 border-2 border-dashed rounded-[38px] flex flex-col items-center w-full">
    <img src="@/assets/img/project.png" alt="Folder" class="size-48 my-8" />
    <p class="font-medium text-xl">Say hello to the world!</p>
    <p class="text-[#637C8E] text-sm">Record your first video/audio and share it with your team, friends, followers and customers.</p>
    <div class="my-8 flex gap-x-4">
        <secondary-btn icon="mynaui:arrow-up-down" text="By Date" />
        <danger-btn @click="$emit('record')" icon="mdi:record-rec" text="Start Recording" />
        <primary-btn icon="tabler:video" text="New Request" />
    </div>
  </div>
</template>

<script setup>
import PrimaryBtn from "@/components/btns/Primary.vue"
import DangerBtn from "@/components/btns/Danger.vue"
</script>

<style lang="less" scoped>

</style>