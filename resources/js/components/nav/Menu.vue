<template>
    <menu ref="menuBox">
        <div>
            <slot>Hello</slot>
        </div>
    </menu>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const emit = defineEmits(['close-menu'])

const menuBox = ref(null);

const listener = (event) => {
    const menu = menuBox.value
    if (menu && !menu.contains(event.target)) {
        return emit('close-menu');
    }
};

onMounted(()=>{
    setTimeout(() => {
        window.addEventListener('click', listener)
    }, 200);
})
onUnmounted(() => {
    window.removeEventListener('click', listener)
})
</script>

<style lang="less" scoped>
.active__nav {
    @apply text-[#0DABD8];
}
menu {
    @apply absolute top-full left-0 right-0 bg-white rounded-md border text-left z-20 w-fit shadow-md;
    div{
        @apply px-6 py-3 text-[#21455E] hover:text-[#0DABD8] font-medium text-sm lg:text-base block bg-red-600;
    }
    &:not(:last-child) {
        @apply border-b;
    }
}

</style>