<template>
  <div class="w-full max-h-screen h-screen overflow-y-clip pt-16">
    <top-nav></top-nav>
    <div class="flex w-full h-full">
      <side-nav v-if="$route.meta.sidebar === true"></side-nav>
      <main :class="$route.meta.sidebar === true ? ' px-12 lg:px-24 py-8' : '' " class="grow overflow-y-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import TopNav from "@/components/nav/TopNav.vue"
import SideNav from "@/components/nav/SideNav.vue"
</script>

<style>

</style>