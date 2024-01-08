<template>
  <nav class="">
    <ul>
        <li v-for="(link, index) in navLinks" :key="index" :class="$route.name === link.name ? 'active__nav' : ''">
            <span class="iconify" :data-icon="link.icon"></span>
            {{ link.text }}
        </li>
    </ul>

  </nav>
</template>

<script setup>

const navLinks = [
    {
        text: 'My Recordings',
        route: '',
        name: 'Recordings',
        icon: 'et:video'
    },
    {
        text: 'Requested',
        route: '',
        name: 'Project',
        icon: 'solar:share-linear'
    },
    
]
</script>

<style lang="less" scoped>
@green: "#21455E";
@blue: "#0DABD838";
@gray: "#E2E5ED";

.active__nav {
    @apply rounded-md border-2 border-[@blue] bg-[@gray];
}
nav{
    @apply bg-[#EBF2F6] h-full w-72 px-4 py-9;
    ul {
        @apply flex flex-col gap-y-4;
        li {
            @apply px-8 py-3 text-sm font-semibold text-[@green] cursor-pointer whitespace-nowrap;
        }
    }
    .iconify {
        @apply inline-block mr-4;
    }
}
</style>